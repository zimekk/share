import gql from "graphql-tag";
import fetch from "cross-fetch";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { getDevices, upnpClient } from "@dev/device";

const channel = "REMOTE";
const remote$ = new BehaviorSubject(null);

export default makeExecutableSchema({
  typeDefs: gql`
    scalar RemoteData
    input RemoteInput {
      data: String
    }
    type Devices {
      data: RemoteData
    }
    type Remote {
      data: RemoteData
    }
    scalar Version
    type Mutation {
      sendRemote(message: RemoteInput): Boolean
    }
    type Query {
      devices: Devices
      version(location: String): Version
      remoteRcu(location: String, key: String): Remote
      remoteTv(location: String, action: String): Remote
      remoteVcr(action: String): Remote
    }
    type Subscription {
      remote: Remote
    }
  `,
  resolvers: {
    Query: {
      devices: () => getDevices(),
      version: (_, { location = "http://192.168.2.101:8080" }) =>
        fetch(`${new URL(location).origin}/system/version`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log({ location, data });
            remote$.next(data);
            return data;
          }),
      remoteRcu: (_, { location = "http://192.168.0.103:8080", key }) =>
        fetch(`${new URL(location).origin}/control/rcu`, {
          method: "POST",
          body: `Keypress=${key}`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then((res) => res.text())
          .then((data) => {
            remote$.next(data);

            return data;
          }),
      remoteTv: (
        _,
        { location = "http://192.168.2.90:55000/dmr/ddd.xml", action }
      ) => {
        const actions = {
          GetMute: {
            InstanceID: 0,
            Channel: "Master",
          },
          SetMute: {
            InstanceID: 0,
            Channel: "Master",
            DesiredMute: true,
          },
          GetVolume: {
            InstanceID: 0,
            Channel: "Master",
          },
          SetVolume: {
            InstanceID: 0,
            Channel: "Master",
            DesiredVolume: 20,
          },
        };

        if (actions[action]) {
          // service: 'urn:upnp-org:serviceId:RenderingControl',
          // actions: {
          //   ListPresets: { inputs: [Array], outputs: [Array] },
          //   SelectPreset: { inputs: [Array], outputs: [] },
          //   GetMute: { inputs: [Array], outputs: [Array] },
          //   SetMute: { inputs: [Array], outputs: [] },
          //   GetVolume: { inputs: [Array], outputs: [Array] },
          //   SetVolume: { inputs: [Array], outputs: [] },
          //   X_GetAudioList: { inputs: [Array], outputs: [Array] },
          //   X_GetCurrentAudioID: { inputs: [Array], outputs: [Array] },
          //   X_SetAudioID: { inputs: [Array], outputs: [] },
          //   X_GetDualMonoModeList: { inputs: [Array], outputs: [Array] },
          //   X_GetCurrentDualMonoModeID: { inputs: [Array], outputs: [Array] },
          //   X_SetDualMonoModeID: { inputs: [Array], outputs: [] },
          //   X_GetSubtitleList: { inputs: [Array], outputs: [Array] },
          //   X_GetCurrentSubtitleID: { inputs: [Array], outputs: [Array] },
          //   X_SetSubtitleID: { inputs: [Array], outputs: [] },
          //   X_GetSubtitleCharCodeList: { inputs: [Array], outputs: [Array] },
          //   X_GetCurrentSubtitleCharCodeID: { inputs: [Array], outputs: [Array] },
          //   X_SetSubtitleCharCodeID: { inputs: [Array], outputs: [] },
          //   X_GetEventServerUrl: { inputs: [], outputs: [] }
          // },
          const service = "urn:upnp-org:serviceId:RenderingControl";
          return (
            upnpClient(location)
              // .getDeviceDescription().then(console.log)
              // .getServiceDescription(service).then(console.log)
              .call(service, action, actions[action])
              .then((data) => ({ data }))
          );
        }

        const [url, urn] = [
          "X_DisplayPinCode",
          "X_LaunchApp",
          "X_RequestAuth",
          "X_SendKey",
        ].includes(action)
          ? ["/nrc/control_0", "panasonic-com:service:p00NetworkControl:1"]
          : ["/dmr/control_0", "schemas-upnp-org:service:RenderingControl:1"];
        const command =
          {
            X_DisplayPinCode: `<X_DeviceName>My Test Remote Control</X_DeviceName>`,
            X_LaunchApp: `<X_AppType>vc_app</X_AppType><X_LaunchKeyword>product_id=0010000200000001</X_LaunchKeyword>`,
            X_RequestAuth: `<X_AuthInfo><X_PinCode>1234</X_PinCode></X_AuthInfo>`,
            X_SendKey: `<X_KeyEvent>NRC_PAUSE-ONOFF</X_KeyEvent>`,
            // X_SendKey: `<X_KeyEvent>NRC_POWER-ONOFF</X_KeyEvent>`,
            // X_SendKey: `<X_KeyEvent>NRC_MENU-ONOFF</X_KeyEvent>`,
            // X_SendKey: `<X_KeyEvent>NRC_HDMI2-ONOFF</X_KeyEvent>`,
          }[action] ||
          `${
            {
              GetVolume: `<InstanceID>0</InstanceID><Channel>Master</Channel>`,
              SetVolume: `<InstanceID>0</InstanceID><Channel>Master</Channel>
              <DesiredVolume>20</DesiredVolume>`,
              GetMute: `<InstanceID>0</InstanceID><Channel>Master</Channel>`,
              SetMute: `<InstanceID>0</InstanceID><Channel>Master</Channel>
              <DesiredMute>1</DesiredMute>`,
              GetMediaInfo: `<InstanceID>0</InstanceID>`,
              X_GetAudioList: `<InstanceID>0</InstanceID>`,
              X_GetCurrentAudioID: `<InstanceID>0</InstanceID>`,
            }[action]
          }`;
        const body = `<?xml version="1.0" encoding="utf-8"?> 
  <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"> 
  <s:Body> 
   <u:${action} xmlns:u="urn:${urn}"> 
    ${command}
   </u:${action}> 
  </s:Body> 
  </s:Envelope>`;
        const headers = {
          "Content-Length": String(body.length),
          "Content-Type": 'text/xml; charset="utf-8"',
          SOAPACTION: `"urn:${urn}#${action}"`,
        };
        console.log({ action, url, urn, headers });
        console.log(body);
        return fetch(`${new URL(location).origin}${url}`, {
          method: "POST",
          mode: "no-cors",
          body,
          headers,
        })
          .then((res) => res.text())
          .then(
            (data) =>
              Boolean(remote$.next(data)) ||
              Boolean(console.log(data)) || { data }
          );
      },
      remoteVcr: (_, { action }) => {
        const base = "http://192.168.2.103";

        return fetch(`${base}/YamahaExtendedControl/v1/${action}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            remote$.next(data);

            return data;
          });
      },
    },
    Mutation: {
      sendRemote: (_, { data }) => {
        remote$.next(data);
        return true;
      },
    },
    Subscription: {
      remote: {
        subscribe: (_root, _args, { pubsub }) => {
          // const channel = Math.random().toString(36).substring(2, 15); // random channel name
          remote$.pipe(tap(console.log)).subscribe((data) => {
            pubsub.publish(channel, { remote: { data } });
          });
          return pubsub.asyncIterator(channel);
        },
      },
    },
  },
});
