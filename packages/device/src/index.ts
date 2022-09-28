import { z } from "zod";

// https://github.com/futomi/node-upnp-utils#discover-upnp-devices-or-services
export function discover() {
  const upnp = require("node-upnp-utils");

  // Set an event listener for 'added' event
  upnp.on("added", (device) =>
    z
      .object({
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
      })
      .parseAsync(device)
      .then(console.log)
  );

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
