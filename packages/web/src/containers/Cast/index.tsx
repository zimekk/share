import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

// https://github.com/wem5637/chromecast-react-web-demo/blob/master/src/CastControls.js
function CastControls({ src }) {
  const [state, setState] = useState(() => ({
    isConnected: false,
    isMediaLoaded: false,
    playerState: null,
  }));
  const remotePlayer = useRef(null);
  const remotePlayerController = useRef(null);

  useEffect(() => {
    const initializeCastPlayer = () => {
      // https://stackoverflow.com/questions/43533703/how-do-you-find-your-google-cast-app-id-app-id-in-the-2017-google-play-develop
      const options = {
        receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID, // CC1AD845
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
        androidReceiverCompatible: true,
      };

      cast.framework.CastContext.getInstance().setOptions(options);

      remotePlayer.current = new cast.framework.RemotePlayer();
      remotePlayerController.current =
        new cast.framework.RemotePlayerController(remotePlayer.current);

      remotePlayerController.current.addEventListener(
        cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED,
        (e) => setState({ isConnected: e.value })
      );

      remotePlayerController.current.addEventListener(
        cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED,
        function (e) {
          if (e.value === "PLAYING") {
            console.log("Chromecast is " + e.value);
            setState({ playerState: e.value });
          } else if (e.value === "BUFFERING") {
            console.log("Chromecast is " + e.value);
            setState({ playerState: e.value });
          } else {
            console.log("Chromecast is " + e.value);
            setState({ playerState: e.value });
          }
        }.bind(this)
      );
    };

    const injectScript = (src: string, type = "text/javascript") => {
      const script = Object.assign(document.createElement("script"), {
        type,
        src,
      });
      document.head.appendChild(script);
    };

    injectScript(`https://www.gstatic.com/cv/js/sender/v1/cast_sender.js`);
    injectScript(
      `https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js`
    );

    window["__onGCastApiAvailable"] = (isAvailable) => {
      if (isAvailable && cast) {
        initializeCastPlayer();
      } else {
        console.log("Was not able to initialize CastPlayer");
      }
    };
  }, []);

  console.log({ state });

  const castSrc = useCallback(() => {
    let mediaInfo = new chrome.cast.media.MediaInfo(1, "video/mp4");
    mediaInfo.contentUrl = src;

    mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;
    mediaInfo.metadata = new chrome.cast.media.TvShowMediaMetadata();
    mediaInfo.metadata.title = "Sample Title";

    let request = new chrome.cast.media.LoadRequest(mediaInfo);
    request.autoplay = true;
    var session = cast.framework.CastContext.getInstance().getCurrentSession();
    if (session) {
      session
        .loadMedia(request)
        .then(() => {
          console.log("Media is loaded");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("no session is available");
    }
  }, []);

  const stopSrc = useCallback(() => {
    var session = cast.framework.CastContext.getInstance().getCurrentSession();
    if (session) {
      remotePlayerController.current.stop();
    }
  }, []);

  return (
    <div
      style={{
        height: "40px",
        width: "200px",
        display: "flex",
        margin: "15px",
      }}
    >
      <google-cast-launcher>Connect to cast</google-cast-launcher>
      <button onClick={castSrc}>Load Media</button>
      <button onClick={stopSrc}>Stop</button>
    </div>
  );
}

export default function Cast() {
  const src =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/ElephantsDream.mp4";

  return (
    <section className={styles.Section}>
      <h2>Cast</h2>
      <video
        style={{ height: "360px", width: "640px" }}
        src={src}
        autoPlay
        controls={true}
      />
      <CastControls src={src} />
    </section>
  );
}
