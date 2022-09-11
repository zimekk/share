import React, { MouseEventHandler, useCallback } from "react";

async function vcr(action) {
  const base = "http://192.168.0.103";

  return fetch(`${base}/YamahaExtendedControl/v1/${action}`, {
    method: "GET",
    mode: "no-cors",
  })
    .then((res) => res.text())
    .then(console.log);
}

export function RemoteVcr() {
  const onGetDeviceInfo = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => vcr("system/getDeviceInfo"),
    []
  );

  const onGetFeatures = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => vcr("system/getFeatures"),
    []
  );

  const onGetStatus = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => vcr("main/getStatus"),
    []
  );

  const onSetVolume70 = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => vcr("main/setVolume?volume=70"),
    []
  );

  const onSetVolume90 = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => vcr("main/setVolume?volume=90"),
    []
  );

  return (
    <div>
      <button onClick={onGetDeviceInfo}>GetDeviceInfo</button>
      <button onClick={onGetFeatures}>GetFeatures</button>
      <button onClick={onGetStatus}>GetStatus</button>
      <button onClick={onSetVolume70}>SetVolume 70%</button>
      <button onClick={onSetVolume90}>SetVolume 90%</button>
    </div>
  );
}
