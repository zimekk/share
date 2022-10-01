import { z } from "zod";

const Device = z.object({
  address: z.string(),
  headers: z.object({
    LOCATION: z.string(),
    SERVER: z.string(),
    USN: z.string(),
  }),
  expire: z.number(),
  description: z
    .object({
      device: z.object({
        deviceType: z.string(),
        friendlyName: z.string(),
        manufacturer: z.string(),
        modelName: z.string(),
        modelNumber: z.string(),
      }),
    })
    .optional(),
});

export function getDevices() {
  const upnp = require("node-upnp-utils");

  const data = {};

  const handler = (device) =>
    Device.parseAsync(device).then(
      ({ headers: { LOCATION }, description }) =>
        Boolean(console.log(LOCATION, description)) ||
        Object.assign(data, description && { [LOCATION]: description.device })
    );

  return new Promise((resolve) => {
    const finish = () => {
      upnp.off("added", handler);
      upnp.stopDiscovery(() => {
        console.log("Stopped the discovery process.");
        resolve({ data });
      });
    };
    upnp.on("added", handler);
    upnp.startDiscovery();

    // Stop the discovery process in 5 seconds
    setTimeout(finish, 5000);
  });
}

// https://github.com/futomi/node-upnp-utils#discover-upnp-devices-or-services
export function discover() {
  const upnp = require("node-upnp-utils");

  // Set an event listener for 'added' event
  upnp.on("added", (device) => Device.parseAsync(device).then(console.log));

  // Start the discovery process
  upnp.startDiscovery();

  // Stop the discovery process in 15 seconds
  setTimeout(() => {
    upnp.stopDiscovery(() => {
      console.log("Stopped the discovery process.");
      process.exit();
    });
  }, 15000);
}
