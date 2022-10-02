import React, { MouseEventHandler, useCallback } from "react";
import { Icon } from "./RemoteTv";

async function vcr(action) {
  const base = "http://192.168.2.103";

  return fetch(`${base}/YamahaExtendedControl/v1/${action}`, {
    method: "GET",
    mode: "no-cors",
  })
    .then((res) => res.text())
    .then(console.log);
}

export function RemoteVcr({ deviceVcr = [], remoteVcr }) {
  const [LOCATION, device] = deviceVcr;

  // https://github.com/honnel/yamaha-commands#http-api---input-and-volume
  return (
    <div>
      {device && device.icons.length && (
        <Icon
          {...device.icons[0]}
          title={`${device.modelName} / ${device.modelNumber}`}
        />
      )}
      <h3>VCR</h3>
      <pre>{JSON.stringify(deviceVcr, null, 2)}</pre>
      <fieldset>
        <legend>Information</legend>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr("system/getDeviceInfo"),
            []
          )}
        >
          Device
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr("system/getFeatures"),
            []
          )}
        >
          Features
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr("system/getNetworkStatus"),
            []
          )}
        >
          NetworkStatus
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr("system/getFuncStatus"),
            []
          )}
        >
          FuncStatus
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr("system/getLocationInfo"),
            []
          )}
        >
          LocationInfo
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr("main/getStatus"),
            []
          )}
        >
          Status
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr("main/getSoundProgramList"),
            []
          )}
        >
          SoundProgramList
        </button>
      </fieldset>
      <fieldset>
        <legend>Input</legend>
        {["airplay", "bluetooth", "net_radio", "optical1", "tuner"].map(
          (input, key) => (
            <button
              key={key}
              onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
                (event) => vcr(`main/setInput?input=${input}`),
                []
              )}
            >
              {input}
            </button>
          )
        )}
      </fieldset>
      <fieldset>
        <legend>Volume</legend>
        {[50, 70, 90, 110, 130, 150].map((volume, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => vcr(`main/setVolume?volume=${volume}`),
              []
            )}
          >
            {`Set ${volume}%`}
          </button>
        ))}
        {["up", "down"].map((volume, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => vcr(`main/setVolume?volume=${volume}`),
              []
            )}
          >
            {`Volume ${volume}`}
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
            {`Mute ${enable ? "On" : "Off"}`}
          </button>
        ))}
      </fieldset>
      <fieldset>
        <legend>Power Functions</legend>
        {[true, false].map((enable, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) =>
                remoteVcr(`system/setAutoPowerStandby?enable=${enable}`),
              []
            )}
          >
            {`AutoPowerStandby ${enable ? "On" : "Off"}`}
          </button>
        ))}
        {["on", "standby", "toggle"].map((power, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => vcr(`main/setPower?power=${power}`),
              []
            )}
          >
            {`Power ${power}`}
          </button>
        ))}
      </fieldset>
      <fieldset>
        <legend>Sleep Timer</legend>
        {[60, 30, 0].map((timer, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => remoteVcr(`main/setSleep?sleep=${timer}`),
              []
            )}
          >
            {`Sleep ${timer} min`}
          </button>
        ))}
      </fieldset>
      <fieldset>
        <legend>AM/FM/DAB Tuner Commands</legend>
        {[1, 2, 3, 4].map((num, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) =>
                remoteVcr(`tuner/recallPreset?zone=main&band=fm&num=${num}`),
              []
            )}
          >
            {`Preset ${num}`}
          </button>
        ))}
        {["next", "previous"].map((dir, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => remoteVcr(`tuner/switchPreset?dir=${dir}`),
              []
            )}
          >
            {`Preset ${dir}`}
          </button>
        ))}
        {[87500, 105200].map((num, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) =>
                remoteVcr(`tuner/setSleep?band=fm&tuning=direct&num=${num}`),
              []
            )}
          >
            {`${new Intl.NumberFormat("pl-PL", {
              maximumFractionDigits: 2,
            }).format(num / 1000)} MHz`}
          </button>
        ))}
        {[5, 6, 7, 8].map((num, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => remoteVcr(`tuner/storePreset?num=${num}`),
              []
            )}
          >
            {`Store ${num}`}
          </button>
        ))}
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(`tuner/getPresetInfo?band=fm`),
            []
          )}
        >
          PresetInfo
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(`tuner/getPlayInfo`),
            []
          )}
        >
          PlayInfo
        </button>
      </fieldset>
    </div>
  );
}
