import React, { MouseEventHandler, useCallback } from "react";
import { Icon, Json } from "../../components";

async function vcr(
  location = "http://192.168.2.100:49154/MediaRenderer/desc.xml",
  action
) {
  return await fetch(
    `http://${new URL(location).hostname}/YamahaExtendedControl/v1/${action}`,
    {
      method: "GET",
      mode: "no-cors",
    }
  )
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
          title={`${device.modelName} / ${device.modelDescription}`}
        />
      )}
      <h3>VCR</h3>
      <Json>{deviceVcr}</Json>
      <fieldset>
        <legend>Information</legend>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(LOCATION, "system/getDeviceInfo"),
            [LOCATION]
          )}
        >
          Device
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(LOCATION, "system/getFeatures"),
            [LOCATION]
          )}
        >
          Features
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(LOCATION, "system/getNetworkStatus"),
            [LOCATION]
          )}
        >
          NetworkStatus
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(LOCATION, "system/getFuncStatus"),
            [LOCATION]
          )}
        >
          FuncStatus
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(LOCATION, "system/getLocationInfo"),
            [LOCATION]
          )}
        >
          LocationInfo
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(LOCATION, "main/getStatus"),
            [LOCATION]
          )}
        >
          Status
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(LOCATION, "main/getSoundProgramList"),
            [LOCATION]
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
                (event) => vcr(LOCATION, `main/setInput?input=${input}`),
                [LOCATION]
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
              (event) => vcr(LOCATION, `main/setVolume?volume=${volume}`),
              [LOCATION]
            )}
          >
            {`Set ${volume}%`}
          </button>
        ))}
        {["up", "down"].map((volume, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => vcr(LOCATION, `main/setVolume?volume=${volume}`),
              [LOCATION]
            )}
          >
            {`Volume ${volume}`}
          </button>
        ))}
        {[true, false].map((enable, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => remoteVcr(LOCATION, `main/setMute?enable=${enable}`),
              [LOCATION]
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
                remoteVcr(
                  LOCATION,
                  `system/setAutoPowerStandby?enable=${enable}`
                ),
              [LOCATION]
            )}
          >
            {`AutoPowerStandby ${enable ? "On" : "Off"}`}
          </button>
        ))}
        {["on", "standby", "toggle"].map((power, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => vcr(LOCATION, `main/setPower?power=${power}`),
              [LOCATION]
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
              (event) => remoteVcr(LOCATION, `main/setSleep?sleep=${timer}`),
              [LOCATION]
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
                remoteVcr(
                  LOCATION,
                  `tuner/recallPreset?zone=main&band=fm&num=${num}`
                ),
              [LOCATION]
            )}
          >
            {`Preset ${num}`}
          </button>
        ))}
        {["next", "previous"].map((dir, key) => (
          <button
            key={key}
            onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
              (event) => remoteVcr(LOCATION, `tuner/switchPreset?dir=${dir}`),
              [LOCATION]
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
                remoteVcr(
                  LOCATION,
                  `tuner/setSleep?band=fm&tuning=direct&num=${num}`
                ),
              [LOCATION]
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
              (event) => remoteVcr(LOCATION, `tuner/storePreset?num=${num}`),
              [LOCATION]
            )}
          >
            {`Store ${num}`}
          </button>
        ))}
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(LOCATION, `tuner/getPresetInfo?band=fm`),
            [LOCATION]
          )}
        >
          PresetInfo
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => remoteVcr(LOCATION, `tuner/getPlayInfo`),
            [LOCATION]
          )}
        >
          PlayInfo
        </button>
      </fieldset>
    </div>
  );
}
