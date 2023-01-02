// import miio from 'miio'
import miio from "@rifat/miio";
import api from "miio-api";

export const scan1 = async () => {
  console.log(["scan"]);

  let device;

  try {
    device = await api.device({
      address: "192.168.2.71",
      token: "...",
    });

    const info = await device.call("get_prop", ["power"]);
    console.log(info);
  } catch (err) {
    console.error("ERROR: " + err);
  } finally {
    await device?.destroy();
  }
};

export const scan2 = async () => {
  console.log(["scan"]);

  // model=deerma.humidifier.jsq
  // miio.device({ address: '192.168.2.102', token:'...' })
  // model=zhimi.airpurifier.mb4,
  miio
    .device({ address: "192.168.2.71", token: "..." })
    .then(async (device) => {
      console.log("Connected to", device);

      // console.log('remperature:', await device.temperature());
      // console.log('relative humidity:', await device.relativeHumidity());
      // console.log('power', await device.power());
      // console.log('togglePower', await device.togglePower());
      // console.log('state', await device.state());
      // console.log('mode', await device.mode());

      if (device.matches("cap:temperature")) {
        console.log("temperature", await device.temperature());
      }
    });
};
