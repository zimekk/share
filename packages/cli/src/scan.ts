import { PubSub } from "graphql-subscriptions";
import { discover, SCENES } from "wikari";
import WiZLocalControl from "@suisse00/wiz-local-control";

const {
  discovery,
  toggle,
  temperature,
  getState,
  rgb,
  dimm,
} = require("wiz-local");

const context = {
  pubsub: new PubSub(),
};

export async function watch() {
  // https://gitlab.com/wizlighting/wiz-local-control#usage
  const wizLocalControl = new WiZLocalControl({
    incomingMsgCallback: (msg, ip) => {
      console.log(`Received the message from WiZ Light ${JSON.stringify(msg)}`);
    },
    // interfaceName: config.udp.interfaceName
  });

  wizLocalControl.startListening();
}

export const scan = async () => {
  console.log(["scan"]);

  const bulb = (await require("@dev/lights").getLights()).pop();

  console.log(await bulb.getPilot());

  // bulb.onMessage(console.log);

  await bulb.subscribe();

  bulb.onSync((syncPilotMsg) => {
    console.log({ syncPilotMsg });
    // syncPilotMsg is the updated state of the bulb
    // it sends a syncPilot message on state change.
    // so for example, if you change the state using
    // the WiZ app on your phone, the changes will
    // show up here as well.
  });

  bulb.closeConnection();

  // https://github.com/gonreyna85code/wiz-local#example
  // const devices = await discovery();
  // console.log(devices);

  // const device = devices[0].ip

  // const state = await getState(device);
  // console.log(state);

  // await toggle(device, true); // true to turn on and false to turn off.(Use boolean, not string)
  // await toggle(device, false); // true to turn on and false to turn off.(Use boolean, not string)
  // await temperature(device, 2700); // 2200 to 6500 is the temperature in Kelvin.(Use integer, not string)
  // // await rgb(device, 255, 255, 255); // 0 to 255 is the color value.(Use integer, not string)
  // // await rgb(device, 255, 0, 0); // 0 to 255 is the color value.(Use integer, not string)
  // await rgb(device, 255, 100, 0); // 0 to 255 is the color value.(Use integer, not string)
  // await dimm(device, 100); // 0 to 100 is the intensity value.(Use integer, not string)
  // // await dimm(device, 10); // 0 to 100 is the intensity value.(Use integer, not string)

  // console.log(await getState(device));
};
