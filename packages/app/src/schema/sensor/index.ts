import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import noble from "@abandonware/noble";

noble.on("stateChange", async (state) => {
  console.log({ state });
  if (state === "poweredOn") {
    // await noble.startScanningAsync(['066f20e9822344a78f9b1af12aa2f8dc'], false);
    // await noble.startScanningAsync(['066f'], false);
    // await noble.startScanningAsync([], false);
    // await noble.startScanningAsync(['180f'], false);
    await noble.startScanningAsync(
      ["00010203-0405-0607-0809-0a0b0c0d1912"],
      false
    );
    // await noble.startScanningAsync();
  }
});

noble.on("discover", async (peripheral) => {
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

export default makeExecutableSchema({
  typeDefs: gql`
    type Sensor {
      value: Int!
    }
    type Subscription {
      sensor: Sensor
    }
  `,
  resolvers: {
    Sensor: {
      value: ({ value }) => value,
    },
    Subscription: {
      sensor: {
        subscribe: (_root, _args, { pubsub }) => {
          const channel = Math.random().toString(36).substring(2, 15); // random channel name
          let value = 0;
          setInterval(
            () => pubsub.publish(channel, { sensor: { value: value++ } }),
            15000
          );
          return pubsub.asyncIterator(channel);
        },
      },
    },
  },
});
