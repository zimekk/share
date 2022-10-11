import React, { MouseEventHandler, useCallback } from "react";
import { Icon, Json } from "../../components";

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
      <Json>{deviceBox}</Json>
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
