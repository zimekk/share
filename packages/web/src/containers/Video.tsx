import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import { useVideo } from "@dev/talks/src/services";
import styles from "./Video.module.scss";

export default function Video() {
  const [data, { sendSignal }] = useVideo();
  const [initiator, setInitiator] = useState(undefined);
  const [stream, setStream] = useState(null);
  const peerRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    if (data && peerRef.current) {
      const { type } = data.signal;

      if (type === "offer" && initiator) return;
      if (type === "answer" && !initiator) return;

      console.log(["peer.signal"], data.signal);
      peerRef.current.signal(data.signal);
    }
  }, [data, peerRef, initiator]);

  useEffect(() => {
    if (initiator !== undefined) {
      console.log({ initiator });

      Promise.resolve()
        .then(() =>
          initiator
            ? navigator.mediaDevices.getUserMedia({
                video: {
                  facingMode: "user",
                },
                audio: false,
              })
            : Promise.resolve(null)
        )
        .then((stream) => {
          setStream(stream);

          const peer = new Peer({
            initiator,
            stream,
            trickle: false,
            reconnectTimer: 1000,
            iceTransportPolicy: "relay",
            config: {
              iceServers: [
                { urls: "stun:stun.l.google.com:19302" },
                { urls: "stun:stun.services.mozilla.com" },
              ],
            },
          })
            .on("signal", (data) => {
              console.log(["signal", initiator], { data });
              sendSignal(data);
            })
            .on("stream", (stream) => {
              console.log(["stream", initiator], { stream });
              Object.assign(remoteVideoRef.current, {
                srcObject: stream,
              });
            })
            .on("error", function (error) {
              console.log(["error", initiator], { error });
            });
          peerRef.current = peer;
        })
        .catch(console.error);
    }
  }, [initiator]);

  useEffect(() => {
    if (stream) {
      const videoTracks = stream.getVideoTracks();
      console.log({ stream, videoTracks });
      Object.assign(localVideoRef.current, {
        srcObject: stream,
      });

      return () => {
        stream.getTracks().forEach((track) => track.stop());
      };
    }
  }, [stream]);

  return (
    <div className={styles.Video}>
      <button onClick={() => setInitiator(true)}>setInitiator(true)</button>
      <button onClick={() => setInitiator(false)}>setInitiator(false)</button>
      <video ref={localVideoRef} width="200" autoPlay muted playsInline />
      <video ref={remoteVideoRef} width="200" autoPlay muted />
    </div>
  );
}
