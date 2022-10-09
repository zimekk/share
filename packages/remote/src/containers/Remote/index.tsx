import React, { useEffect, useMemo, useState } from "react";
import { RemoteService } from "../../services";
import { Discover } from "./Discover";
import { RemoteAdb } from "./RemoteAdb";
import { RemoteBox } from "./RemoteBox";
import { RemoteTv } from "./RemoteTv";
import { RemoteVcr } from "./RemoteVcr";
import styles from "./styles.module.scss";

import type { DeviceType } from "@dev/device";

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

const remoteService = new RemoteService();

function useRemote() {
  const [{ data }, setState] = useState(() => ({
    data: null,
  }));
  const [devices, setDevices] = useState<Record<string, DeviceType>>(
    () => ({})
  );

  useEffect(() => {
    const subscriptions = [
      remoteService.onMessage().subscribe(({ data }) => setState({ data })),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [
    { data, devices },
    {
      discover: () =>
        remoteService.getDevices().subscribe(({ data }) => setDevices(data)),
      remoteRcu: (location, key) => remoteService.getRemoteRcu(location, key),
      remoteTv: (location, action) =>
        remoteService.getRemoteTv(location, action),
      remoteVcr: (location, action) =>
        remoteService.getRemoteVcr(location, action),
      status: (location) => remoteService.getStatusAdb(location),
      sendMessage: (message) => remoteService.sendMessage(message),
    },
  ];
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

export default function Remote() {
  const [
    { data, devices },
    { discover, remoteRcu, remoteTv, remoteVcr, status },
  ] = useRemote();
  console.log({ data, devices });

  const deviceAdb = useMemo(
    () =>
      Object.entries(devices).find(
        ([_, { deviceType }]) =>
          deviceType === "urn:schemas-upnp-org:device:MediaServer:3"
      ),
    [devices]
  );

  const deviceBox = useMemo(
    () =>
      Object.entries(devices).find(
        ([_, { deviceType, manufacturer }]) =>
          deviceType === "urn:schemas-upnp-org:device:MediaRenderer:1" &&
          manufacturer === "Microsoft Corporation"
      ),
    [devices]
  );

  const deviceTv = useMemo(
    () =>
      Object.entries(devices).find(
        ([_, { deviceType, manufacturer }]) =>
          deviceType === "urn:schemas-upnp-org:device:MediaRenderer:1" &&
          manufacturer === "Panasonic"
      ),
    [devices]
  );

  const deviceVcr = useMemo(
    () =>
      Object.entries(devices).find(
        ([_, { deviceType, manufacturer }]) =>
          deviceType === "urn:schemas-upnp-org:device:MediaRenderer:1" &&
          manufacturer === "Yamaha Corporation"
      ),
    [devices]
  );

  return (
    <section className={styles.Section}>
      <h2>Remote</h2>
      <Discover discover={discover} />
      <RemoteAdb deviceAdb={deviceAdb} remoteRcu={remoteRcu} status={status} />
      <RemoteVcr deviceVcr={deviceVcr} remoteVcr={remoteVcr} />
      <RemoteTv deviceTv={deviceTv} remoteTv={remoteTv} />
      <RemoteBox deviceBox={deviceBox} remoteBox={remoteRcu} />
      {data === null ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </section>
  );
}
