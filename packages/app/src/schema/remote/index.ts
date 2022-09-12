import gql from "graphql-tag";
import fetch from "cross-fetch";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { makeExecutableSchema } from "@graphql-tools/schema";

const channel = "REMOTE";
const remote$ = new BehaviorSubject(null);

export default makeExecutableSchema({
  typeDefs: gql`
    scalar RemoteData
    input RemoteInput {
      data: String
    }
    type Remote {
      data: RemoteData
    }
    type Mutation {
      sendRemote(message: RemoteInput): Boolean
    }
    type Query {
      remote: Remote
      remoteRcu(key: String): Remote
      remoteTv(action: String): Remote
    }
    type Subscription {
      remote: Remote
    }
  `,
  resolvers: {
    Query: {
      remote: () => {
        const base = "http://192.168.2.101:8080";

        return fetch(`${base}/system/version`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            remote$.next(data);

            return data;
          });
      },
      remoteRcu: (_, { key }) => {
        const base = "http://192.168.0.103:8080";

        return fetch(`${base}/control/rcu`, {
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
          });
      },
      remoteTv: (_, { action }) => {
        const base = "http://192.168.2.90:55000";
        const [url, urn] = [
          "X_DisplayPinCode",
          "X_LaunchApp",
          "X_RequestAuth",
          "X_SendKey",
          "X_SendKey2",
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
        return fetch(`${base}${url}`, {
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
