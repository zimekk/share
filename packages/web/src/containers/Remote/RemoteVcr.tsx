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

  return (
    <div>
      <button onClick={onGetDeviceInfo}>GetDeviceInfo</button>
      <button onClick={onGetFeatures}>GetFeatures</button>
      <button onClick={onGetStatus}>GetStatus</button>
      <button
        onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
          (event) => vcr("main/setVolume?volume=50"),
          []
        )}
      >
        SetVolume 50%
      </button>
      <button
        onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
          (event) => vcr("main/setVolume?volume=70"),
          []
        )}
      >
        SetVolume 70%
      </button>
      <button
        onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
          (event) => vcr("main/setVolume?volume=90"),
          []
        )}
      >
        SetVolume 90%
      </button>
      <button
        onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
          (event) => vcr("main/setVolume?volume=110"),
          []
        )}
      >
        SetVolume 110%
      </button>
      <button
        onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
          (event) => vcr("main/setVolume?volume=130"),
          []
        )}
      >
        SetVolume 130%
      </button>
      <button
        onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
          (event) => vcr("main/setVolume?volume=150"),
          []
        )}
      >
        SetVolume 150%
      </button>
    </div>
  );
}
