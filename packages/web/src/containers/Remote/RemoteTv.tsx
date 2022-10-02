import React, { MouseEventHandler, useCallback } from "react";
import styles from "./styles.module.scss";

import type { IconType } from "@dev/device";

export function Icon({
  url,
  width,
  height,
  title,
}: IconType & { title: string }) {
  return (
    <img
      className={styles.Icon}
      src={url}
      width={width}
      height={height}
      title={title}
    />
  );
}

export function RemoteTv({ deviceTv = [], remoteTv }) {
  const [LOCATION, device] = deviceTv;

  const onGetVolume = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "GetVolume"),
    [LOCATION]
  );

  const onSetVolume = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "SetVolume"),
    [LOCATION]
  );

  const onGetMute = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "GetMute"),
    [LOCATION]
  );

  const onListPresets = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "ListPresets"),
    [LOCATION]
  );

  const onSetMute = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "SetMute"),
    [LOCATION]
  );

  const onSendKey = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "X_SendKey"),
    [LOCATION]
  );

  const onAppType = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "X_LaunchApp"),
    [LOCATION]
  );

  const onPinCode = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "X_DisplayPinCode"),
    [LOCATION]
  );

  const onRequestAuth = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "X_RequestAuth"),
    [LOCATION]
  );

  const onGetAudioList = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "X_GetAudioList"),
    [LOCATION]
  );

  const onGetCurrentAudioID = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "X_GetCurrentAudioID"),
    [LOCATION]
  );

  const onGetCurrentConnectionIDs = useCallback<
    MouseEventHandler<HTMLButtonElement>
  >((event) => remoteTv(LOCATION, "GetCurrentConnectionIDs"), [LOCATION]);

  const onGetMediaInfo = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "GetMediaInfo"),
    [LOCATION]
  );

  const onGetProtocolInfo = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv(LOCATION, "GetProtocolInfo"),
    [LOCATION]
  );

  return (
    <div>
      {device && device.icons.length && (
        <Icon
          {...device.icons[0]}
          title={`${device.modelName} / ${device.modelNumber}`}
        />
      )}
      <h3>TV</h3>
      <pre>{JSON.stringify(deviceTv, null, 2)}</pre>
      <fieldset>
        <legend>Volume</legend>
        <button onClick={onGetVolume}>GetVolume</button>
        <button onClick={onSetVolume}>SetVolume</button>
        <button onClick={onGetMute}>GetMute</button>
        <button onClick={onSetMute}>SetMute</button>
      </fieldset>
      <fieldset>
        <legend>Information</legend>
        <button onClick={onListPresets}>ListPresets</button>
        <button onClick={onSendKey}>SendKey</button>
        <button onClick={onAppType}>AppType</button>
        <button onClick={onPinCode}>PinCode</button>
        <button onClick={onRequestAuth}>RequestAuth</button>
        <button onClick={onGetAudioList}>GetAudioList</button>
        <button onClick={onGetCurrentAudioID}>GetCurrentAudioID</button>
        <button onClick={onGetCurrentConnectionIDs}>
          GetCurrentConnectionIDs
        </button>
        <button onClick={onGetMediaInfo}>GetMediaInfo</button>
        <button onClick={onGetProtocolInfo}>GetProtocolInfo</button>
      </fieldset>
    </div>
  );
}
