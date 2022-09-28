import React, { MouseEventHandler, useCallback } from "react";

async function adb(key = "KeyStandBy") {
  const base = "http://192.168.2.101:8080";

  return await fetch(`${base}/control/rcu`, {
    method: "POST",
    mode: "no-cors",
    body: `Keypress=${key}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.text())
    .then(console.log);
}

export function RemoteAdb({ remoteRcu, status }) {
  const onVersion = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => status(),
    []
  );

  const onStandBy = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => adb("KeyStandBy"),
    []
  );

  const onVolumeDown = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => adb("KeyVolumeDown"),
    []
  );

  const onVolumeUp = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteRcu("KeyVolumeUp"),
    []
  );

  return (
    <div>
      <h3>ADB</h3>
      <fieldset>
        <legend>Information</legend>
        <button onClick={onVersion}>Version</button>
      </fieldset>
      <fieldset>
        <legend>Power</legend>
        <button onClick={onStandBy}>StandBy</button>
      </fieldset>
      <fieldset>
        <legend>Volume</legend>
        <button onClick={onVolumeDown}>Volume -</button>
        <button onClick={onVolumeUp}>Volume +</button>
      </fieldset>
    </div>
  );
}
