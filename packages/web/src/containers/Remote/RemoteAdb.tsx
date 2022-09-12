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
      <button onClick={onVersion}>Version</button>
      <button onClick={onStandBy}>StandBy</button>
      <button onClick={onVolumeDown}>Volume -</button>
      <button onClick={onVolumeUp}>Volume +</button>
    </div>
  );
}
