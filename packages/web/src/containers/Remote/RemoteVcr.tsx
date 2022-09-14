import React, { MouseEventHandler, useCallback } from "react";

async function vcr(action) {
  const base = "http://192.168.2.103";

  return fetch(`${base}/YamahaExtendedControl/v1/${action}`, {
    method: "GET",
    mode: "no-cors",
  })
    .then((res) => res.text())
    .then(console.log);
}

export function RemoteVcr({ remoteVcr }) {
  const onGetDeviceInfo = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteVcr("system/getDeviceInfo"),
    []
  );

  const onGetFeatures = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteVcr("system/getFeatures"),
    []
  );

  const onGetStatus = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteVcr("main/getStatus"),
    []
  );

  // https://github.com/honnel/yamaha-commands#http-api---input-and-volume
  return (
    <div>
      <button onClick={onGetDeviceInfo}>GetDeviceInfo</button>
      <button onClick={onGetFeatures}>GetFeatures</button>
      <button onClick={onGetStatus}>GetStatus</button>
      {["net_radio", "tuner", "optical1"].map((input, key) => (
        <button
          key={key}
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => vcr(`main/setInput?input=${input}`),
            []
          )}
        >
          {`SetInput ${input}`}
        </button>
      ))}
      {[50, 70, 90, 110, 130, 150].map((volume, key) => (
        <button
          key={key}
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => vcr(`main/setVolume?volume=${volume}`),
            []
          )}
        >
          {`SetVolume ${volume}%`}
        </button>
      ))}
      {[true, false].map((enable, key) => (
        <button
          key={key}
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(`main/setMute?enable=${enable}`),
            []
          )}
        >
          {`SetMute ${enable}`}
        </button>
      ))}
      {[60, 30, 0].map((timer, key) => (
        <button
          key={key}
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(`main/setSleep?sleep=${timer}`),
            []
          )}
        >
          {`SetSleep ${timer} min`}
        </button>
      ))}
    </div>
  );
}
