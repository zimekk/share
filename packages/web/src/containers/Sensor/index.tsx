import React, { MouseEventHandler, useCallback, useEffect } from "react";
import { useSensor } from "@dev/sensor/src/services";
import styles from "./styles.module.scss";

// https://github.com/atc1441/atc1441.github.io/blob/master/TelinkFlasher.html
const addLog = console.log;
const addClog = addLog;
const setStatus = addLog;

function handleError(error) {
  console.error(error);
  // resetVariables();
  // if (connectTrys < 5) {
  //     connectTrys++;
  //     addLog("Reconnect " + connectTrys + " from " + 5);
  //     doConnect();
  // } else {
  //     addLog("Something went wrong, to many reconnect's");
  //     connectTrys = 0;
  // }
}

function onDisconnected() {
  console.log("Disconnected.");
}

function catchAdvertisement(device) {
  const abortController = new AbortController();
  device.addEventListener(
    "advertisementreceived",
    (event) => {
      console.log('Received advertisement from "' + device.name + '"...');
      event.serviceData.forEach((valueDataView) => {
        const buffer = new Uint8Array(valueDataView.buffer);
        console.log(buffer, device, event);
        if (device.name == "LYWSD03MMC") {
          console.log(
            "LYWSD03MMC MAC:",
            buffer[10].toString(16),
            buffer[9].toString(16),
            buffer[8].toString(16),
            buffer[7].toString(16),
            buffer[6].toString(16),
            buffer[5].toString(16)
          );
          document.getElementById("MAC").innerHTML =
            "LYWSD03MMC MAC: " +
            buffer[10].toString(16) +
            buffer[9].toString(16) +
            buffer[8].toString(16) +
            buffer[7].toString(16) +
            buffer[6].toString(16) +
            buffer[5].toString(16);
        }
        if (device.name.startsWith("ATC")) {
          console.log(
            "ATC MAC:",
            buffer[0].toString(16),
            buffer[1].toString(16),
            buffer[2].toString(16),
            buffer[3].toString(16),
            buffer[4].toString(16),
            buffer[5].toString(16)
          );
          document.getElementById("MAC").innerHTML =
            "ATC MAC: " +
            buffer[0].toString(16) +
            buffer[1].toString(16) +
            buffer[2].toString(16) +
            buffer[3].toString(16) +
            buffer[4].toString(16) +
            buffer[5].toString(16);
        } else {
          console.log("only LYWSD03MMC/ATC supported");
        }
      });
      abortController.abort();
    },
    { once: true }
  );
}

let ServiceMain;
let writeCharacteristicSpeed;
let nitifiyCharTemp;

function miAction(addMeasurement) {
  gattServer
    .getPrimaryService("ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6")
    .then((service) => {
      addClog("Found Main service");
      ServiceMain = service;
      return ServiceMain.getCharacteristic(
        "ebe0ccd8-7a0a-4b0c-8a1a-6ff2997da3a6"
      );
    })
    .then((characteristic) => {
      addClog("Found Write characteristic Speed");
      writeCharacteristicSpeed = characteristic;
      return ServiceMain.getCharacteristic(
        "ebe0ccc1-7a0a-4b0c-8a1a-6ff2997da3a6"
      );
    })
    .then((characteristic) => {
      addClog("Found Temp characteristic");
      nitifiyCharTemp = characteristic;
      return nitifiyCharTemp.startNotifications().then(() => {
        nitifiyCharTemp.addEventListener(
          "characteristicvaluechanged",
          (event) => {
            var value = event.target.value;
            console.log({ value });
            var sign = value.getUint8(1) & (1 << 7);
            var temp = ((value.getUint8(1) & 0x7f) << 8) | value.getUint8(0);
            if (sign) temp = temp - 32767;
            temp = temp / 100;
            var humi = value.getUint8(2);
            var tempTempString = "Temp/Humi: " + temp + "°C / " + humi + "%";
            document.getElementById("tempHumiData").innerHTML = tempTempString;
            addClog(tempTempString);
            addMeasurement({
              date: Date.now(),
              temperature: temp,
              humidity: humi,
            });
          }
        );
        // miAuthorization()
      });
    })
    .catch(handleError);
}

let bluetoothDevice = null;
let gattServer;
let Theservice;
let writeCharacteristic;

function doConnect(addMeasurement) {
  bluetoothDevice.gatt
    .connect()
    .then((server) => {
      addClog("Found GATT server");
      gattServer = server;
      return gattServer.getPrimaryService(
        "00010203-0405-0607-0809-0a0b0c0d1912"
      );
    })
    .then((service) => {
      addClog("Found service");
      Theservice = service;
      return Theservice.getCharacteristic(
        "00010203-0405-0607-0809-0a0b0c0d2b12"
      );
    })
    .then((characteristic) => {
      addClog("Found write characteristic");
      writeCharacteristic = characteristic;
      detectMi(addMeasurement);
    })
    .catch(handleError);
}

let miEnabled;
let customEnabled;

function detectMi(addMeasurement) {
  gattServer
    .getPrimaryServices()
    .then((services) => {
      miEnabled = false;
      customEnabled = false;
      for (var i = 0; i < services.length; i++) {
        console.log("Services: " + services[i].uuid);
        if (services[i].uuid == "ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6")
          miEnabled = true;
        if (services[i].uuid == "00001f10-0000-1000-8000-00805f9b34fb")
          customEnabled = true;
      }
      if (miEnabled) {
        addLog("Detected Mi Thermometer");
        setStatus("Detected Mi Thermometer");
        miAction(addMeasurement);
      } else if (customEnabled) {
        addLog("Detected custom Firmware");
        setStatus("Detected custom Firmware");
        // customAction();
      } else {
        addLog("Connected");
        setStatus("Connected");
      }
    })
    .catch(handleError);
}

export default function Sensor() {
  const [{ values }, { addMeasurement }] = useSensor();
  console.log({ values });

  useEffect(() => {}, []);

  const onReconnect = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      if (bluetoothDevice !== null) bluetoothDevice.gatt.disconnect();
      // resetVariables();
      addLog("Reconnect");
      // connectTrys = 0;
      doConnect(addMeasurement);
    },
    [addMeasurement]
  );

  const onConnect = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice
      const deviceOptions = {
        filters: [
          { name: "LYWSD03MMC" },
          {
            services: [0xfe95],
          },
          // {
          //   services: [
          //     "00010203-0405-0607-0809-0a0b0c0d1912",
          //     "ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6",
          //     0xfe95,
          //     0x1f10,
          //   ],
          // },
        ],
        optionalServices: [
          "00010203-0405-0607-0809-0a0b0c0d1912",
          "ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6",
          0xfe95,
          0x1f10,
        ],
        // acceptAllDevices: true,
      };
      navigator.bluetooth.getAvailability().then((availability) => {
        if (availability) {
          // https://developer.mozilla.org/en-US/docs/Web/API/BluetoothCharacteristicProperties#examples
          navigator.bluetooth
            .requestDevice(deviceOptions)
            .then((device) => {
              console.log({ device });
              bluetoothDevice = device;
              catchAdvertisement(device);
              bluetoothDevice.addEventListener(
                "gattserverdisconnected",
                onDisconnected
              );
              addLog("Connecting to: " + bluetoothDevice.name);
              doConnect(addMeasurement);
            })
            .catch(handleError);
        }
      });
    },
    [addMeasurement]
  );

  return (
    <section className={styles.Section}>
      <span>LYWSD03MMC</span>
      <button onClick={onConnect}>Connect</button>
      <button onClick={onReconnect}>Reconnect</button>
      <span id="tempHumiData"></span>
      <span id="MAC"></span>
      {values === null ? (
        <div>Loading...</div>
      ) : (
        values.map((item, key) => <div key={key}>{JSON.stringify(item)}</div>)
      )}
    </section>
  );
}
