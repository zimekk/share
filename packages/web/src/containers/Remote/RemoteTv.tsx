import React, { MouseEventHandler, useCallback } from "react";

export function RemoteTv({ remoteTv }) {
  const onGetVolume = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("GetVolume"),
    []
  );

  const onSetVolume = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("SetVolume"),
    []
  );

  const onGetMute = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("GetMute"),
    []
  );

  const onListPresets = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("ListPresets"),
    []
  );

  const onSetMute = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("SetMute"),
    []
  );

  const onSendKey = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("X_SendKey"),
    []
  );

  const onAppType = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("X_LaunchApp"),
    []
  );

  const onPinCode = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("X_DisplayPinCode"),
    []
  );

  const onRequestAuth = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("X_RequestAuth"),
    []
  );

  const onGetAudioList = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("X_GetAudioList"),
    []
  );

  const onGetCurrentAudioID = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("X_GetCurrentAudioID"),
    []
  );

  const onGetCurrentConnectionIDs = useCallback<
    MouseEventHandler<HTMLButtonElement>
  >((event) => remoteTv("GetCurrentConnectionIDs"), []);

  const onGetMediaInfo = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("GetMediaInfo"),
    []
  );

  const onGetProtocolInfo = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => remoteTv("GetProtocolInfo"),
    []
  );

  return (
    <div>
      <h3>TV</h3>
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
