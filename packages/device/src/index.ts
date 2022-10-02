import UPnPClient from "node-upnp";
import { decode } from "html-entities";
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

const Service = z.object({
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

export function getDevices() {
  const upnp = require("node-upnp-utils");

  const data = {};

  const handler = (service) =>
    Service.parseAsync(service).then(({ headers: { LOCATION }, description }) =>
      upnpClient(LOCATION)
        .getDeviceDescription()
        .then((device) => {
          console.log(LOCATION, device);
          // console.log({item})
          Object.assign(data, description && { [LOCATION]: device });
        })
    );

  return new Promise((resolve) => {
    const finish = () => {
      upnp.off("added", handler);
      upnp.stopDiscovery(() => {
        console.log("Stopped the discovery process.");
        // console.log(upnp.getActiveDeviceList());
        resolve({ data });
      });
    };
    upnp.on("added", handler);
    upnp.startDiscovery();

    // Stop the discovery process in 5 seconds
    setTimeout(finish, 5000);
  });
}

// https://github.com/velocityzen/node-upnp#usage
export function upnpClient(url) {
  return new UPnPClient({
    url,
  });
}

// https://github.com/futomi/node-upnp-utils#discover-upnp-devices-or-services
export function discover() {
  const upnp = require("node-upnp-utils");

  // Set an event listener for 'added' event
  upnp.on("added", (service) =>
    Service.parseAsync(service).then(async (service) => {
      const { headers } = service;
      // console.log(service)

      if (!service.description) {
        return;
      }

      const client = new UPnPClient({
        url: headers.LOCATION,
      });

      let desc = await client.getDeviceDescription();
      const { services, modelName } = desc;

      Object.keys(services).map(
        async (service) =>
          await client.getServiceDescription(service).then(async (data) => {
            if (service === "urn:upnp-org:serviceId:RenderingControl-") {
              console.log({ modelName, service, ...data });
            }

            if (service === "urn:upnp-org:serviceId:ScheduledRecording-") {
              const action = "GetSortCapabilities";
              await client
                .call(service, action, {})
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
            }

            if (service === "urn:upnp-org:serviceId:ConnectionManager-") {
              const action = "GetProtocolInfo";
              await client
                .call(service, action, {})
                .then(
                  (result) => (
                    console.log({ action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
            }

            if (service === "urn:upnp-org:serviceId:ConnectionManager-") {
              const action = "GetCurrentConnectionIDs";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {})
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
            }

            const action = "X_GetAudioList";
            if (
              service === "urn:upnp-org:serviceId:RenderingControl-" &&
              data.actions[action]
            ) {
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InstanceID: 0,
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // { X_AudioList: '-1,' }
            }

            if (service === "urn:upnp-org:serviceId:RenderingControl-") {
              const action = "GetVolume";
              await client
                .call(service, action, {
                  InstanceID: 0,
                  Channel: "Master",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // { CurrentVolume: 20 }
            }

            if (service === "urn:upnp-org:serviceId:RenderingControl-") {
              const action = "SetVolume";
              // console.log(data.stateVariables)
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InstanceID: 0,
                  Channel: "Master",
                  DesiredVolume: 50,
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // {}
            }

            if (service === "urn:upnp-org:serviceId:RenderingControl-") {
              const action = "ListPresets";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InstanceID: 0,
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // { CurrentPresetNameList: 'FactoryDefaults' }
            }

            if (service === "urn:upnp-org:serviceId:AVTransport-") {
              const action = "GetMediaInfo";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InstanceID: 0,
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // {
              //   NrTracks: 0,
              //   MediaDuration: '0:00:00',
              //   CurrentURI: '',
              //   CurrentURIMetaData: '',
              //   NextURI: '',
              //   NextURIMetaData: '',
              //   PlayMedium: 'NONE',
              //   RecordMedium: 'NOT_IMPLEMENTED',
              //   WriteStatus: 'NOT_IMPLEMENTED'
              // }
            }

            if (service === "urn:upnp-org:serviceId:AVTransport-") {
              const action = "GetTransportInfo";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InstanceID: 0,
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // {
              //   CurrentTransportState: 'NO_MEDIA_PRESENT',
              //   CurrentTransportStatus: 'OK',
              //   CurrentSpeed: 1
              // }
            }

            if (service === "urn:upnp-org:serviceId:AVTransport-") {
              const action = "GetDeviceCapabilities";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InstanceID: 0,
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // {
              //   PlayMedia: 'NONE,NETWORK',
              //   RecMedia: 'NOT_IMPLEMENTED',
              //   RecQualityModes: 'NOT_IMPLEMENTED'
              // }
            }

            if (service === "urn:upnp-org:serviceId:AVTransport-") {
              const action = "GetTransportSettings";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InstanceID: 0,
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // { PlayMode: 'NORMAL', RecQualityMode: 'NOT_IMPLEMENTED' }
            }

            if (service === "urn:upnp-org:serviceId:X_ADB_RemoteControl-") {
              const action = "ProcessInputEvent";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InputEvent: "KeyVolumeDown",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // {}
            }

            if (service === "urn:upnp-org:serviceId:ContentDirectory-") {
              const action = "GetSearchCapabilities";
              // console.log({modelName,action, ...data.actions[action]})
              await client
                .call(service, action, {})
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // {}
            }

            if (service === "urn:upnp-org:serviceId:ContentDirectory-") {
              const action = "Search";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  ContainerID: 0,
                  SearchCriteria: "*",
                  Filter: "name",
                  StartingIndex: 0,
                  RequestedCount: 100,
                  SortCriteria: "",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // {
              //   Result: '&lt;DIDL-Lite xmlns=&quot;urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/&quot; xmlns:dc=&quot;http://purl.org/dc/elements/1.1/&quot; xmlns:upnp=&quot;urn:schemas-upnp-org:metadata-1-0/upnp/&quot;                                                                                                                                                                   &gt;\n' +
              //     '&lt;/DIDL-Lite&gt;',
              //   NumberReturned: 0,
              //   TotalMatches: 0,
              //   UpdateID: 0
              // }
            }

            if (service === "urn:upnp-org:serviceId:ContentDirectory-") {
              const action = "Browse";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  ObjectID: 0,
                  // BrowseFlag: 'BrowseMetadata',
                  BrowseFlag: "BrowseDirectChildren",
                  Filter: "*",
                  StartingIndex: 0,
                  RequestedCount: 100,
                  SortCriteria: "",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result),
                    console.log(decode(result.Result))
                  )
                );
              // {
              //   Result: '&lt;DIDL-Lite xmlns=&quot;urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/&quot; xmlns:dc=&quot;http://purl.org/dc/elements/1.1/&quot; xmlns:upnp=&quot;urn:schemas-upnp-org:metadata-1-0/upnp/&quot;                                                                                                                                                                   &gt;\n' +
              //     '&lt;container id=&quot;0&quot; parentID=&quot;-1&quot; restricted=&quot;1&quot;&gt;&lt;dc:title&gt;Content Directory&lt;/dc:title&gt;&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;&lt;/container&gt;&lt;/DIDL-Lite&gt;',
              //   NumberReturned: 1,
              //   TotalMatches: 1,
              //   UpdateID: 0
              // }
              // {
              //   Result: '&lt;DIDL-Lite xmlns=&quot;urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/&quot; xmlns:dc=&quot;http://purl.org/dc/elements/1.1/&quot; xmlns:upnp=&quot;urn:schemas-upnp-org:metadata-1-0/upnp/&quot;&gt;&lt;container id=&quot;0&quot; parentID=&quot;-1&quot; childCount=&quot;1&quot; restricted=&quot;true&quot; searchable=&quot;true&quot;&gt;&lt;upnp:class&gt;object.container.storageFolder&lt;/upnp:class&gt;&lt;dc:title&gt;root&lt;/dc:title&gt;&lt;/container&gt;&lt;/DIDL-Lite&gt;',
              //   NumberReturned: 1,
              //   TotalMatches: 1,
              //   UpdateID: 0
              // }
              // {
              //   Result: '&lt;DIDL-Lite xmlns=&quot;urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/&quot; xmlns:dc=&quot;http://purl.org/dc/elements/1.1/&quot; xmlns:upnp=&quot;urn:schemas-upnp-org:metadata-1-0/upnp/&quot;&gt;&lt;container id=&quot;110000&quot; parentID=&quot;0&quot; childCount=&quot;0&quot; restricted=&quot;true&quot;&gt;&lt;upnp:class&gt;object.container.storageFolder&lt;/upnp:class&gt;&lt;dc:title&gt;MediaServerRoot&lt;/dc:title&gt;&lt;/container&gt;&lt;/DIDL-Lite&gt;',
              //   NumberReturned: 1,
              //   TotalMatches: 1,
              //   UpdateID: 0
              // }
            }

            if (service === "urn:upnp-org:serviceId:ScheduledRecording-") {
              const action = "GetPropertyList";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  DataTypeID: "A_ARG_TYPE_RecordSchedule",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // {
              //   PropertyList: 'srs:@id,srs:title,srs:class,srs:scheduledChannelID,srs:scheduledChannelID@type,srs:scheduledStartDateTime,srs:scheduledDuration,srs:priority,srs:recordDestination,srs:recordDestination@mediaType,srs:recordDestination@preference,srs:scheduleState,srs:scheduleState@currentErrors,srs:abnormalTasksExist,srs:currentRecordTaskCount'
              // }
            }

            if (service === "urn:upnp-org:serviceId:ScheduledRecording-") {
              const action = "BrowseRecordSchedules";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  Filter: "srs:@id",
                  StartingIndex: 0,
                  RequestedCount: 100,
                  SortCriteria: "",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result),
                    console.log(decode(result.Result))
                  )
                );
              // {
              //   Result: '&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;\n' +
              //     '&lt;srs xmlns=&quot;urn:schemas-upnp-org:av:srs&quot; xmlns:didl-lite=&quot;urn:schema-upnp-org:metadata-1-0/DIDL-Lite&quot; xmlns:ocap=&quot;urn:schemas-cablelabs-com&quot; xmlns:adb=&quot;urn:schemas-adbglobal-com:HN-1-0/&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;urn:schemas-upnp-org:av:srs http://www.upnp.org/schemas/av/srs.xsd&quot;&gt;\n' +
              //     '&lt;/srs&gt;',
              //   NumberReturned: 0,
              //   TotalMatches: 0,
              //   UpdateID: 0
              // }
            }

            if (service === "urn:upnp-org:serviceId:ScheduledRecording-") {
              const action = "BrowseRecordTasks";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  RecordScheduleID: 0,
                  Filter: "srs:scheduledChannelID",
                  StartingIndex: 0,
                  RequestedCount: 100,
                  SortCriteria: "",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result),
                    console.log(decode(result.Result))
                  )
                );
              // {
              //   Result: '&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;\n' +
              //     '&lt;srs xmlns=&quot;urn:schemas-upnp-org:av:srs&quot; xmlns:didl-lite=&quot;urn:schema-upnp-org:metadata-1-0/DIDL-Lite&quot; xmlns:ocap=&quot;urn:schemas-cablelabs-com&quot; xmlns:adb=&quot;urn:schemas-adbglobal-com:HN-1-0/&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;urn:schemas-upnp-org:av:srs http://www.upnp.org/schemas/av/srs.xsd&quot;&gt;\n' +
              //     '&lt;/srs&gt;',
              //   NumberReturned: 0,
              //   TotalMatches: 0,
              //   UpdateID: 0
              // }
            }

            if (service === "urn:upnp-org:serviceId:ScheduledRecording-") {
              const action = "GetRecordSchedule";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  RecordScheduleID:
                    "::uuid:1651c520-1dd2-11b2-a7dd-c477af3c9c7f::urn:schemas-upnp-org:service:ScheduledRecording:2",
                  Filter: "srs:@id",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result),
                    console.log(decode(result.Result))
                  )
                );
              // (node:67335) UnhandledPromiseRejectionWarning: Error: (704) No such recordSchedule ID
            }

            if (service === "urn:upnp-org:serviceId:ScheduledRecording-") {
              const action = "GetRecordTask";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  RecordTaskID: "",
                  Filter: "srs:title",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result),
                    console.log(decode(result.Result))
                  )
                );
              // (node:67403) UnhandledPromiseRejectionWarning: Error: (713) No such recordTask ID
            }

            if (service === "urn:upnp-org:serviceId:ScheduledRecording-") {
              const action = "GetAllowedValues";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  DataTypeID: "A_ARG_TYPE_RecordSchedule",
                  Filter: "srs:@id",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result),
                    console.log(decode(result.PropertyInfo))
                  )
                );
              // {
              //   PropertyInfo: '&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;\n' +
              //     '&lt;AVDT xmlns=&quot;urn:schemas-upnp-org:av:avdt&quot; xmlns:srs=&quot;urn:schemas-upnp-org:av:srs&quot; xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:didl-lite=&quot;urn:schema-upnp-org:metadata-1-0/DIDL-Lite&quot; xmlns:ocap=&quot;urn:schemas-cablelabs-com&quot; xmlns:adb=&quot;urn:schemas-adbglobal-com:HN-1-0/&quot; xsi:schemaLocation=&quot;urn:schemas-upnp-org:av:srs http://www.upnp.org/schemas/av/srs.xsd urn:schemas-upnp-org:av:avdt http://www.upnp.org/schemas/av/avdt.xsd&quot;&gt;\n' +
              //     '&lt;contextID&gt;::uuid:1651c520-1dd2-11b2-a7dd-c477af3c9c7f::urn:schemas-upnp-org:service:ScheduledRecording:2&lt;/contextID&gt;&lt;dataStructType&gt;A_ARG_TYPE_RecordSchedule&lt;/dataStructType&gt;&lt;fieldTable&gt;&lt;field&gt;&lt;name&gt;srs:@id&lt;/name&gt;&lt;dataType&gt;xsd:string&lt;/dataType&gt;&lt;minCountTotal&gt;1&lt;/minCountTotal&gt;&lt;allowedValueDescriptor&gt;&lt;allowAny /&gt;&lt;/allowedValueDescriptor&gt;&lt;/field&gt;&lt;/fieldTable&gt;&lt;/AVDT&gt;'
              // }
            }

            if (service === "urn:upnp-org:serviceId:ScheduledRecording-") {
              const action = "GetAllowedValues";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  DataTypeID: "A_ARG_TYPE_RecordSchedule",
                  Filter: "srs:@id",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result),
                    console.log(decode(result.PropertyInfo))
                  )
                );
              // {
              //   PropertyInfo: '&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;\n' +
              //     '&lt;AVDT xmlns=&quot;urn:schemas-upnp-org:av:avdt&quot; xmlns:srs=&quot;urn:schemas-upnp-org:av:srs&quot; xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:didl-lite=&quot;urn:schema-upnp-org:metadata-1-0/DIDL-Lite&quot; xmlns:ocap=&quot;urn:schemas-cablelabs-com&quot; xmlns:adb=&quot;urn:schemas-adbglobal-com:HN-1-0/&quot; xsi:schemaLocation=&quot;urn:schemas-upnp-org:av:srs http://www.upnp.org/schemas/av/srs.xsd urn:schemas-upnp-org:av:avdt http://www.upnp.org/schemas/av/avdt.xsd&quot;&gt;\n' +
              //     '&lt;contextID&gt;::uuid:1651c520-1dd2-11b2-a7dd-c477af3c9c7f::urn:schemas-upnp-org:service:ScheduledRecording:2&lt;/contextID&gt;&lt;dataStructType&gt;A_ARG_TYPE_RecordSchedule&lt;/dataStructType&gt;&lt;fieldTable&gt;&lt;field&gt;&lt;name&gt;srs:title&lt;/name&gt;&lt;dataType&gt;xsd:string&lt;/dataType&gt;&lt;minCountTotal&gt;1&lt;/minCountTotal&gt;&lt;allowedValueDescriptor&gt;&lt;allowAny&gt;&lt;/allowAny&gt;&lt;/allowedValueDescriptor&gt;&lt;/field&gt;&lt;/fieldTable&gt;&lt;/AVDT&gt;'
              // }
            }

            if (service === "urn:upnp-org:serviceId:RenderingControl-") {
              const action = "GetMute";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InstanceID: 0,
                  Channel: "Master",
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // { CurrentMute: 0 }
            }

            if (service === "urn:upnp-org:serviceId:RenderingControl-") {
              const action = "SetMute";
              // console.log(data.stateVariables)
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  InstanceID: 0,
                  Channel: "Master",
                  DesiredMute: true,
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
              // { CurrentMute: 0 }
            }

            if (service === "urn:upnp-org:serviceId:ConnectionManager-") {
              const action = "GetCurrentConnectionInfo";
              // console.log({ modelName, action, ...data.actions[action] });
              await client
                .call(service, action, {
                  ConnectionID: 0,
                })
                .then(
                  (result) => (
                    console.log({ modelName, action, ...data.actions[action] }),
                    console.log(result)
                  )
                );
            }
          })
      );
    })
  );

  // Start the discovery process
  upnp.startDiscovery();

  // Stop the discovery process in 5 seconds
  setTimeout(() => {
    upnp.stopDiscovery(() => {
      console.log("Stopped the discovery process.");
      process.exit();
    });
  }, 5000);
}
