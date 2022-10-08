import { z } from "zod";

const Icon = z.object({
  mimetype: z.enum(["image/png"]),
  width: z.number(),
  height: z.number(),
  depth: z.number(),
  url: z.string(),
});

const Device = z.object({
  deviceType: z.string(),
  friendlyName: z.string(),
  manufacturer: z.string(),
  modelName: z.string(),
  modelNumber: z.string(),
});

export const Service = z.object({
  address: z.string(),
  headers: z.object({
    LOCATION: z.string(),
    SERVER: z.string(),
    USN: z.string(),
  }),
  expire: z.number(),
  description: z
    .object({
      device: Device,
    })
    .optional(),
});

export type IconType = z.infer<typeof Icon>;

export type DeviceType = z.infer<typeof Device> & {
  icons: IconType[];
};
