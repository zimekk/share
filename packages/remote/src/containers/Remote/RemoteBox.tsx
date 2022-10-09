import React, { MouseEventHandler, useCallback } from "react";
import { Icon } from "./RemoteTv";

export function RemoteBox({ deviceBox = [], remoteBox }) {
  const [LOCATION, device] = deviceBox;

  return (
    <div>
      {device && device.icons.length && (
        <Icon
          {...device.icons[1]}
          title={`${device.modelName} / ${device.modelDescription}`}
        />
      )}
      <h3>BOX</h3>
      <pre>{JSON.stringify(deviceBox, null, 2)}</pre>
      <fieldset>
        <legend>Power</legend>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteBox(LOCATION, "KeyPause"),
            [LOCATION]
          )}
        >
          Toggle
        </button>
      </fieldset>
    </div>
  );
}
