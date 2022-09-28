import noble from "@abandonware/noble";
import async from "async";
import MiPacket from "mipacket";
import XiaomiServiceReader from "xiaomi-gap-parser";
import miflora from "miflora";

const channel = "SENSOR";

const stateChange = async (state) => {
  console.log({ state });

  if (state === "poweredOn") {
    noble.startScanning([], true);
  } else {
    noble.stopScanning();
  }

  // if (state === "poweredOn") {
  //   // await noble.startScanningAsync(['066f20e9822344a78f9b1af12aa2f8dc'], false);
  //   // await noble.startScanningAsync(['066f'], false);
  //   // await noble.startScanningAsync([], false);
  //   // await noble.startScanningAsync(['180f'], false);
  //   await noble.startScanningAsync(["fe95"], true);
  //   // await noble.startScanningAsync();
  // }
};

function explore(peripheral) {
  console.log("services and characteristics:");

  // peripheral.on('disconnect', function() {
  //   process.exit(0);
  // });
  peripheral.connect(function (error) {
    peripheral.discoverServices([], function (error, services) {
      var serviceIndex = 0;
      console.log({ services });
      async.whilst(
        function () {
          return serviceIndex < services.length;
        },
        function (callback) {
          var service = services[serviceIndex];
          var serviceInfo = service.uuid;

          console.log({ service });

          if (service.name) {
            serviceInfo += " (" + service.name + ")";
          }
          console.log(serviceInfo);

          service.discoverCharacteristics(
            [],
            function (error, characteristics) {
              var characteristicIndex = 0;
              console.log({ characteristics });
              async.whilst(
                function () {
                  return characteristicIndex < characteristics.length;
                },
                function (callback) {
                  var characteristic = characteristics[characteristicIndex];
                  var characteristicInfo = "  " + characteristic.uuid;

                  if (characteristic.name) {
                    characteristicInfo += " (" + characteristic.name + ")";
                  }

                  async.series([
                    function (callback) {
                      characteristic.discoverDescriptors(function (
                        error,
                        descriptors
                      ) {
                        async.detect(
                          descriptors,
                          function (descriptor, callback) {
                            if (descriptor.uuid === "2901") {
                              return callback(descriptor);
                            } else {
                              return callback();
                            }
                          },
                          function (userDescriptionDescriptor) {
                            if (userDescriptionDescriptor) {
                              userDescriptionDescriptor.readValue(function (
                                error,
                                data
                              ) {
                                if (data) {
                                  characteristicInfo +=
                                    " (" + data.toString() + ")";
                                }
                                callback();
                              });
                            } else {
                              callback();
                            }
                          }
                        );
                      });
                    },
                    function (callback) {
                      characteristicInfo +=
                        "\n    properties  " +
                        characteristic.properties.join(", ");

                      if (characteristic.properties.indexOf("read") !== -1) {
                        characteristic.read(function (error, data) {
                          if (data) {
                            var string = data.toString("ascii");

                            characteristicInfo +=
                              "\n    value       " +
                              data.toString("hex") +
                              " | '" +
                              string +
                              "'";
                          }
                          callback();
                        });
                      } else {
                        callback();
                      }
                    },
                    function () {
                      console.log(characteristicInfo);
                      characteristicIndex++;
                      callback();
                    },
                  ]);
                },
                function (error) {
                  serviceIndex++;
                  callback();
                }
              );
            }
          );
        },
        function (err) {
          peripheral.disconnect();
        }
      );
    });
  });
}

/*
noble.on('discover-', function(peripheral) {
  console.log('peripheral discovered (' + peripheral.id +
              ' with address <' + peripheral.address +  ', ' + peripheral.addressType + '>,' +
              ' connectable ' + peripheral.connectable + ',' +
              ' RSSI ' + peripheral.rssi + ':');
  console.log('\thello my local name is:');
  console.log('\t\t' + peripheral.advertisement.localName);
  console.log('\tcan I interest you in any of the following advertised services:');
  console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));

  var serviceData = peripheral.advertisement.serviceData;
  if (serviceData && serviceData.length) {
    console.log('\there is my service data:');
    for (var i in serviceData) {
      console.log('\t\t' + JSON.stringify(serviceData[i].uuid) + ': ' + JSON.stringify(serviceData[i].data.toString('hex')));
    }
  }
  if (peripheral.advertisement.manufacturerData) {
    console.log('\there is my manufacturer data:');
    console.log('\t\t' + JSON.stringify(peripheral.advertisement.manufacturerData.toString('hex')));
  }
  if (peripheral.advertisement.txPowerLevel !== undefined) {
    console.log('\tmy TX power level is:');
    console.log('\t\t' + peripheral.advertisement.txPowerLevel);
  }

  console.log();
});

noble.on("discover-", async (peripheral) => {
  console.log(peripheral);
  console.log(peripheral.advertisement?.manufacturerData?.toString("hex"));
  console.log(peripheral.advertisement?.serviceData);
  // await noble.stopScanningAsync();
  // await peripheral.connectAsync();
  // const {characteristics} = await peripheral.discoverSomeServicesAndCharacteristicsAsync(['180f'], ['2a19']);
  // const batteryLevel = (await characteristics[0].readAsync())[0];

  // console.log(`${peripheral.address} (${peripheral.advertisement.localName}): ${batteryLevel}%`);

  // await peripheral.disconnectAsync();
  // process.exit(0);
});

// const lywsd03mmc = require('xiaomi-mijia-lywsd03mmc')

// // Get an array with the MAC addresses of the nearby sensors
// lywsd03mmc.getSensors().then((res) => {
//     res.forEach(sensorAddress => {
//         // Get an object with the sensor data
//         lywsd03mmc.getData(sensorAddress).then((res) => {
//             // {
//             //     address: 'XX:XX:XX:XX:XX:XX',
//             //     humidityLevel: XX,
//             //     temperature: XX,
//             //     batteryLevel: XX
//             // }
//             console.log(res)
//         }).catch((err) => {
//             console.error(`[xiaomi-mijia-lywsd03mmc] Unable to get data (address: ${sensorAddress}, error: ${err})`)
//         })
//     })
// }).catch((err) => {
//     console.error(`[xiaomi-mijia-lywsd03mmc] Unable to get sensors (error: ${err})`)
// })
*/

export async function signal({ pubsub }) {
  const discover2 = function (peripheral) {
    const { advertisement, id, rssi, address } = peripheral;
    const { localName, serviceData, serviceUuids } = advertisement;
    let xiaomiData = null;

    for (let i in serviceData) {
      if (serviceData[i].uuid.toString("hex") === "fe95") {
        xiaomiData = serviceData[i].data;
      }
    }

    if (!xiaomiData) return;

    console.log(xiaomiData);

    const data = XiaomiServiceReader.readServiceData(xiaomiData);
    if (data.event) {
      console.log({
        id,
        address,
        localName,
        rssi,
        data,
      });

      // console.log(new MiPacket(xiaomiData))
      const value = Buffer.from(xiaomiData);
      // const buffer = new Uint8Array(xiaomiData.buffer);
      // console.log({value})
      var sign = value.readUInt8(1) & (1 << 7);
      var temp = ((value.readUInt8(1) & 0x7f) << 8) | value.readUInt8(0);
      if (sign) temp = temp - 32767;
      temp = temp / 100;
      var hum = value.readUInt8(2);
      console.log({ sign, temp, hum });
      var tempTempString = "Temp/Humi: " + temp + "°C / " + hum + "%";
      console.log({ tempTempString });
    }
  };

  const discover = function (peripheral) {
    // if (peripheral.id === peripheralIdOrAddress || peripheral.address === peripheralIdOrAddress) {
    //   noble.stopScanning();
    console.log({ peripheral });

    console.log("peripheral with ID " + peripheral.id + " found");
    var advertisement = peripheral.advertisement;

    var localName = advertisement.localName;
    var txPowerLevel = advertisement.txPowerLevel;
    var manufacturerData = advertisement.manufacturerData;
    var serviceData = advertisement.serviceData;
    var serviceUuids = advertisement.serviceUuids;
    console.log({ advertisement });
    // console.log({serviceData})
    serviceData.map(({ uuid, data }) =>
      console.log(`${uuid}: ${data.toString("hex")}`)
    );
    if (localName) {
      console.log("  Local Name        = " + localName);
    }

    if (txPowerLevel) {
      console.log("  TX Power Level    = " + txPowerLevel);
    }

    if (manufacturerData) {
      console.log("  Manufacturer Data = " + manufacturerData.toString("hex"));
    }

    if (serviceData) {
      console.log(
        "  Service Data      = " + JSON.stringify(serviceData, null, 2)
      );
      console.log(serviceData[0].data);
      console.log(new MiPacket(serviceData[0].data));
    }

    if (serviceUuids) {
      console.log("  Service UUIDs     = " + serviceUuids);
    }

    pubsub.publish(channel, { sensor: { data: localName } });
    explore(peripheral);
  };

  // noble.on("stateChange", stateChange);
  // noble.on("discover", discover2);
  // noble.on("discover", discover);

  //   const devices = await miflora.discover();
  // console.log('devices discovered: ', devices.length);

  const opts = {
    duration: 60000,
    // ignoreUnknown: true,
    // addresses: ['c4:7c:8d:65:d6:1d', 'c4:7c:8d:65:d5:26', 'c4:7c:8d:65:e6:20']
    addresses: ["a4-c1-38-8e-53-81"],
  };
  const devices = await miflora.discover(opts);
  console.log("devices discovered: ", devices.length);

  // function getEvent(value) {
  //   console.log({ value });
  //   var sign = value.getUint8(1) & (1 << 7);
  //   var temp = ((value.getUint8(1) & 0x7f) << 8) | value.getUint8(0);
  //   if (sign) temp = temp - 32767;
  //   temp = temp / 100;
  //   var hum = value.getUint8(2);
  //   var tempTempString = "Temp/Humi: " + temp + "°C / " + hum + "%";

  //   console.log({tempTempString})
  // }

  // getEvent(Buffer.from('8e4e84010017796005', 'hex'))
}
