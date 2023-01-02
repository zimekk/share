import React, { useCallback, useRef } from "react";
import styles from "./styles.module.scss";

const controlServiceUUID = "0000181b-0000-1000-8000-00805f9b34fb";
const commandCharacteristicUUID = "00002a9c-0000-1000-8000-00805f9b34fb";
// const controlServiceUUID = 'ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6';
// const commandCharacteristicUUID = 'ebe0ccc1-7a0a-4b0c-8a1a-6ff2997da3a6';

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/web-bluetooth/web-bluetooth-tests.ts
function tempValue(value: DataView) {
  let sign = value.getUint8(1) & (1 << 7);
  let temp = ((value.getUint8(1) & 0x7f) << 8) | value.getUint8(0);
  if (sign) temp = temp - 32767;
  const temperature = temp / 100;
  const humidity = value.getUint8(2);
  console.log({
    temperature, // °C
    humidity, // %
  });
}

export default function Section() {
  const ref = useRef(null);

  return (
    <section className={styles.Section}>
      <div>
        <button
          onClick={useCallback(async () => {
            const device = await navigator.bluetooth.requestDevice({
              filters: [
                {
                  name: "MIBCS",
                },
              ],
              // acceptAllDevices: true,
              optionalServices: [controlServiceUUID],
            });

            console.log(device);

            device.gatt
              .connect()
              .then(async (server) => {
                // Step 3: Get the Service
                // serverInstance = server;
                console.log(server);
                // console.log(await server.getPrimaryServices())
                return server.getPrimaryService(controlServiceUUID);
                // console.log("Getting PrimaryService");
              })
              .then(async (service) => {
                (await service.getCharacteristics()).map(
                  ({ properties, uuid, value }) =>
                    console.log({ properties, uuid, value })
                );

                return service.getCharacteristic(commandCharacteristicUUID);
                // console.log("Getting Characteristic");
              })
              .then((characteristic) =>
                characteristic.startNotifications().then(() => {
                  // https://github.com/limhenry/web-bluetooth-mi-scale/blob/master/main.js
                  // https://github.com/lolouk44/xiaomi_mi_scale/blob/master/src/Xiaomi_Scale.py
                  function scaleValue(value: DataView) {
                    const stabilized = value.getUint8(1) & (1 << 5);
                    const weight =
                      ((value.getUint8(12) << 8) + value.getUint8(11)) / 200;
                    const impedance =
                      (value.getUint8(10) << 8) + value.getUint8(9);

                    console.log({ stabilized, weight, impedance });

                    ref.current.value = weight;

                    if (impedance > 0 && impedance < 3000 && stabilized) {
                      characteristic.stopNotifications();
                    }
                  }

                  characteristic.addEventListener(
                    "characteristicvaluechanged",
                    ({ target }) => {
                      const { value } =
                        target as BluetoothRemoteGATTCharacteristic;
                      // tempValue(value)
                      scaleValue(value);
                    }
                  );
                })
              );
          }, [])}
        >
          start measure
        </button>
        <input ref={ref} readOnly />
      </div>
      <div>
        <a
          href="https://dev.to/henrylim96/reading-xiaomi-mi-scale-data-with-web-bluetooth-scanning-api-1mb9"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://dev.to/henrylim96/reading-xiaomi-mi-scale-data-with-web-bluetooth-scanning-api-1mb9
        </a>
      </div>
    </section>
  );
}
