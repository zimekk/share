import React, { useCallback, useEffect, useMemo, useState } from "react";
import { RemoteService } from "../../services";
import { Discover } from "./Discover";
import { RemoteAdb } from "./RemoteAdb";
import { RemoteBox } from "./RemoteBox";
import { RemoteTv } from "./RemoteTv";
import { RemoteVcr } from "./RemoteVcr";
import styles from "./styles.module.scss";

import type { DeviceType } from "@dev/device";

const remoteService = new RemoteService();

function useRemote() {
  const [{ data }, setState] = useState(() => ({
    data: null,
  }));
  const [devices, setDevices] = useState<Record<string, DeviceType>>(
    () => ({})
  );

  const discover = useCallback(
    () => remoteService.getDevices().subscribe(({ data }) => setDevices(data)),
    []
  );

  useEffect(() => {
    const subscriptions = [
      remoteService.onMessage().subscribe(({ data }) => setState({ data })),
    ];

    discover();

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [
    { data, devices },
    {
      discover,
      remoteRcu: (location, key) =>
        remoteService.getRemoteRcu(location, key).subscribe(setState),
      remoteTv: (location, action) =>
        remoteService.getRemoteTv(location, action),
      remoteVcr: (location, action) =>
        remoteService.getRemoteVcr(location, action),
      status: (location) => remoteService.getStatusAdb(location),
      sendMessage: (message) => remoteService.sendMessage(message),
    },
  ];
}

export default function Remote() {
  const [
    { data, devices },
    { discover, remoteRcu, remoteTv, remoteVcr, status },
  ] = useRemote();
  console.log({ data });

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
