import React, { MouseEventHandler, useCallback, useState } from "react";
import { Json } from "../../components";

async function adb(location = "http://192.168.2.101:8080", key = "KeyStandBy") {
  return await fetch(`${new URL(location).origin}/control/rcu`, {
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

export function RemoteAdb({ deviceAdb = [], remoteRcu, status }) {
  const [version, setVersion] = useState(() => ({}));
  const [LOCATION] = deviceAdb;

  const onVersion = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => status(LOCATION).subscribe(setVersion),
    [LOCATION]
  );

  const onStandBy = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => adb(LOCATION, "KeyStandBy"),
    [LOCATION]
  );

  const onVolumeDown = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => adb(LOCATION, "KeyVolumeDown"),
    [LOCATION]
  );

  const onVolumeUp = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteRcu(LOCATION, "KeyVolumeUp"),
    [LOCATION]
  );

  return (
    <div>
      <h3>ADB</h3>
      <Json>{deviceAdb}</Json>
      <fieldset>
        <legend>Information</legend>
        <button onClick={onVersion}>Version</button>
        <pre>{JSON.stringify(version, null, 2)}</pre>
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
      <fieldset>
        <legend>Playback</legend>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => adb(LOCATION, "KeyPause"),
            [LOCATION]
          )}
        >
          Pause
        </button>
        <button onClick={onVolumeUp}>Volume +</button>
      </fieldset>
    </div>
  );
}
