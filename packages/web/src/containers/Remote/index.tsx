import React, { MouseEventHandler, useCallback, useEffect } from "react";
import { useSensor } from "@dev/talks/src/services";
import styles from "./styles.module.scss";

const base = "http://192.168.2.101:8080";

const keys = {
  VOD: 361,
  POWER: 116,
  N: 174,
  EPG: 365,
  HOME: 102,

  INFO: 358,
  APP: 367,
  OPT: 357,

  VOL_P: 115,
  VOL_M: 114,

  UP: 103,
  LEFT: 105,
  OK: 352,
  RIGHT: 106,
  DOWN: 108,

  PR_P: 402,
  PR_M: 403,

  BACK: 158,

  STOP: 128,
  REV: 168,
  PAUSE: 119,
  PLAY: 207,
  FF: 159,
  REC: 167,

  MUTE: 113,
  PORTAL: 102,
  TEXT: 388,
  LIST: 395,

  RADIO: 385,

  RED: 398,
  GREEN: 399,
  YELLOW: 400,
  BLUE: 401,

  "1": 2,
  "2": 3,
  "3": 4,
  "4": 5,
  "5": 6,
  "6": 7,
  "7": 8,
  "8": 9,
  "9": 10,
  "0": 11,

  SETUP: 367,
  STAR: 1,
};

function delay(timeout = 100) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

// https://github.com/HubertReX/Flask-Home-Automation/blob/master/send_key2ncplus.py
// http://192.168.2.101:8080/upnpdev/pres/uuid_1651c520-1dd2-11b2-a7dd-c477af3c9c7f/00

async function event(ev: string, code: number) {
  return await exec(`<?xml version="1.0" encoding="utf-8"?>
  <s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
     <s:Body>
        <u:ProcessInputEvent xmlns:u="urn:adbglobal.com:service:X_ADB_RemoteControl:1">
           <InputEvent>ev=${ev},code=${code}</InputEvent>
        </u:ProcessInputEvent>
     </s:Body>
  </s:Envelope>`)
    .then((res) => res.text())
    .then((data) => console.log(data));
}

// https://raw.githubusercontent.com/rafikel/Fibaro/master/ncplus/ncplus.lua

async function exec(
  body: string,
  action = "urn:adbglobal.com:service:X_ADB_RemoteControl:1#ProcessInputEvent"
) {
  const ctrl = "/upnpfun/ctrl/uuid_1651c520-1dd2-11b2-a7dd-c477af3c9c7f/04";
  // const ctrl = '/upnpfun/ctrl/uuid_1651c520-1dd2-11b2-a7dd-c477af3c9c7f/01'
  const url = `${base}${ctrl}`;

  console.log(body);

  return await fetch(url, {
    method: "POST",
    body,
    headers: {
      SOAPACTION: `"${action}"`,
      // "SOAPACTION": '',
      // "SOAPACTION": '"urn:adbglobal.com:service:X_ADB_RemoteControl:1"',
      // "SOAPACTION": 'urn:adbglobal.com:service:X_ADB_RemoteControl:1#ProcessInputEvent',
      // "CONTENT-TYPE": 'text/xml; charset="utf-8"',
      // "HOST": "192.168.2.101:8080",
      // 'Content-type': 'application/xml',
      // 'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

async function test() {
  // upnpReqest(tcpDEVICE, virtualIP, virtualPort,
  //   "/upnpfun/ctrl/" .. boxId .. "/04",
  //   "adbglobal.com",
  //   "X_ADB_RemoteControl:1",
  //   "ProcessInputEvent",
  //   "<InputEvent>ev=keydn,code=" .. key .. "</InputEvent>"
  // );

  // await exec(`<?xml version="1.0" encoding="utf-8"?>
  // <s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  //    <s:Body>
  //       <u:ProcessInputEvent xmlns:u="urn:adbglobal.com:service:X_ADB_RemoteControl:1">
  //          <InputEvent>ev=${status},code=${keys.POWER}</InputEvent>
  //       </u:ProcessInputEvent>
  //    </s:Body>
  // </s:Envelope>`).then(res => res.text())
  // .then(data => console.log(data))

  // response = upnpReqest(tcpDEVICE, virtualIP, virtualPort,
  //   "/upnpfun/ctrl/" .. boxId .. "/01",
  //   "schemas-upnp-org",
  //   "ContentDirectory:2",
  //   "GetSystemUpdateID",
  //   ""
  // );

  // await exec(`<?xml version="1.0" encoding="utf-8"?>
  // <s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  //    <s:Body>
  //       <u:GetSystemUpdateID xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:2">
  //       </u:GetSystemUpdateID>
  //    </s:Body>
  // </s:Envelope>`,"urn:schemas-upnp-org:service:ContentDirectory:2#GetSystemUpdateID").then(res => res.text())
  // .then(data => console.log(data))

  const code = keys.POWER;

  await event("keydown", code);
  await delay(1000);
  await event("keyup", code);

  // await exec(`<?xml version="1.0" encoding="utf-8"?>
  //   <s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  //      <s:Body>
  //         <u:ProcessInputEvent xmlns:u="urn:adbglobal.com:service:X_ADB_RemoteControl:1">
  //            <InputEvent>ev=${status},code=${key}</InputEvent>
  //         </u:ProcessInputEvent>
  //      </s:Body>
  //   </s:Envelope>`).then(res => res.text())
  // .then(data => console.log(data))
}

// test()

async function test2(key = "KeyStandBy") {
  // await fetch(`${base}/system/version`, {
  //   method: 'GET',
  //   mode: 'no-cors',
  // }).then(res => res.text())
  // .then(data => console.log(data))

  // await delay(2000)

  // const body = JSON.stringify({Keypress: 'KeyVolumeUp'})

  // console.log({body})

  // {
  //   host: '192.168.0.106:8080',
  //   'user-agent': 'python-requests/2.28.1',
  //   'accept-encoding': 'gzip, deflate',
  //   accept: '*/*',
  //   connection: 'keep-alive',
  //   'content-length': '19',
  //   'content-type': 'application/x-www-form-urlencoded'
  // }

  // const base = 'http://192.168.0.106:8080'

  await fetch(`${base}/control/rcu`, {
    method: "POST",
    mode: "no-cors",
    body: `Keypress=${key}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) =>
      Boolean(
        console.log({ status: res.status, headers: [...res.headers.entries()] })
      )
        ? null
        : res.text()
    )
    .then((data) => console.log(data));
}

// test2()

async function test3() {
  const UPnPClient = null; //require('node-upnp');

  const client = new UPnPClient({
    url: `${base}/upnpdev/devc/uuid_1651c520-1dd2-11b2-a7dd-c477af3c9c7f/00`,
  });

  let desc = await client.getDeviceDescription();
  console.log("Device", desc);

  desc = await client.getServiceDescription(
    "urn:upnp-org:serviceId:X_ADB_RemoteControl"
  );
  console.log("Service:X_ADB_RemoteControl", desc);
  console.log(desc.stateVariables.Enabled);

  // await client.subscribe('urn:upnp-org:serviceId:X_ADB_RemoteControl', (e:any) => console.log(e));

  await delay(1000);

  // await client.on('Enabled', (e:any) => console.log(e));
  // await client.on('Capabilities', (e:any) => console.log(e));
  // await client.on('ResponseMessage', (e:any) => console.log(e));
  // await client.on('LastChange', (e:any) => console.log(e));

  // desc = await client.call('urn:upnp-org:serviceId:X_ADB_RemoteControl', 'ProcessInputEvent', {
  //   InputEvent: `ev=keydn,code=4`,
  // });
  // console.log('Call:X_ADB_RemoteControl.ProcessInputEvent', desc);

  await delay(100);

  // desc = await client.call('urn:upnp-org:serviceId:X_ADB_RemoteControl', 'ProcessInputEvent', {
  //   InputEvent: `ev=keyup,code=4`,
  // });
  // console.log('Call:X_ADB_RemoteControl.ProcessInputEvent', desc);

  desc = await client.call(
    "urn:upnp-org:serviceId:X_ADB_RemoteControl",
    "PostMessage",
    {
      Message: `ev=keyup,code=4`,
    }
  );
  console.log("Call:X_ADB_RemoteControl.PostMessage", desc);

  // await delay(1000)

  // // await client.subscribe('urn:upnp-org:serviceId:ScheduledRecording', (e:any) => console.log(e));

  // await delay(1000)

  //   // desc = await client.call('urn:upnp-org:serviceId:X_ADB_RemoteControl', 'ProcessInputEvent', {
  //   //   InputEvent: `ev=keyup,code=${keys.POWER}`,
  //   // });
  //   // console.log('Call:X_ADB_RemoteControl.ProcessInputEvent', desc);

  //   // desc = await client.getServiceDescription('urn:upnp-org:serviceId:ConnectionManager');
  //   // console.log('Service:ConnectionManager', desc);

  //   // desc = await client.call('urn:upnp-org:serviceId:ConnectionManager', 'GetProtocolInfo');
  //   // console.log('Call:ConnectionManager.GetProtocolInfo', desc);

  //   // desc = await client.call('urn:upnp-org:serviceId:ConnectionManager', 'GetCurrentConnectionIDs');
  //   // console.log('Call:ConnectionManager.GetCurrentConnectionIDs', desc);

  //   // desc = await client.getServiceDescription('urn:upnp-org:serviceId:ContentDirectory');
  //   // console.log('Service:ContentDirectory', desc);

  //   // desc = await client.call('urn:upnp-org:serviceId:ContentDirectory', 'GetSearchCapabilities');
  //   // console.log('Call:ContentDirectory.GetSearchCapabilities', desc);

  //   // desc = await client.call('urn:upnp-org:serviceId:ContentDirectory', 'GetFeatureList');
  //   // console.log('Call:ContentDirectory.GetFeatureList', desc);

  //   desc = await client.getServiceDescription('urn:upnp-org:serviceId:ScheduledRecording');
  //   console.log('Service:ScheduledRecording', desc);

  //   desc = await client.call('urn:upnp-org:serviceId:ScheduledRecording', 'GetSortCapabilities');
  //   console.log('Call:ScheduledRecording.GetSortCapabilities', desc);

  //   // desc = await client.getVariableServiceId('SourceProtocolInfo');
  //   // console.log('Variable:SourceProtocolInfo', desc);

  //   // desc = await client.getVariableServiceId('Volume', true);
  //   // console.log('Variable:Volume', desc);

  //   console.log('hasSubscriptions', client.hasSubscriptions());
}

export const schema = () => {
  console.log(["schema"]);
};

// https://github.com/atc1441/atc1441.github.io/blob/master/TelinkFlasher.html
const addLog = console.log;
const addClog = addLog;
const setStatus = addLog;

function handleError(error) {
  console.error(error);
  // resetVariables();
  // if (connectTrys < 5) {
  //     connectTrys++;
  //     addLog("Reconnect " + connectTrys + " from " + 5);
  //     doConnect();
  // } else {
  //     addLog("Something went wrong, to many reconnect's");
  //     connectTrys = 0;
  // }
}

export default function Sensor() {
  const [{ values }] = useSensor();
  console.log({ values });

  const onVolumeDown = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      test2("KeyVolumeDown");
    },
    []
  );

  const onVolumeUp = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      test2("KeyVolumeUp");
    },
    []
  );

  return (
    <section className={styles.Section}>
      <button onClick={onVolumeDown}>Volume -</button>
      <button onClick={onVolumeUp}>Volume +</button>
      {values === null ? (
        <div>Loading...</div>
      ) : (
        values.map((item, key) => <div key={key}>{JSON.stringify(item)}</div>)
      )}
    </section>
  );
}
