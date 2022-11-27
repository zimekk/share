import { Bulb, discover } from "wikari";

export * from "./types";

export async function getLights() {
  // https://github.com/uditkarode/wikari#api
  const bulbs = await discover({
    addr: "192.168.0.255",
  });
  console.log({ bulbs });

  return bulbs;
}

export async function getLightStatus(address: string) {
  const bulb = new Bulb(address, {});

  const pilot = await bulb.getPilot();
  console.log(pilot);

  return pilot.result;
}

export async function toggleState(address: string) {
  const bulb = new Bulb(address, {});

  const pilot = await bulb.toggle();
  console.log(pilot);

  return true;
}
