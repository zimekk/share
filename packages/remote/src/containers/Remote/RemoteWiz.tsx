import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Json } from "../../components";
import { LightsService } from "../../services";

// import type { SCENES } from "@dev/lights";

const remoteService = new LightsService();

function useRemote() {
  const [devices, setDevices] = useState(() => []);

  const discover = useCallback(
    () =>
      remoteService
        .getDevices()
        .subscribe(({ devices }: any) => setDevices(devices)),
    []
  );

  useEffect(() => {
    discover();
  }, []);

  return {
    devices,
    discover,
  };
}

function useDevice(address: string) {
  const [status, setStatus] = useState(() => ({}));

  return {
    status,
    getStatus: useCallback(
      () =>
        remoteService
          .getStatus(address)
          .subscribe(({ status }: any) => setStatus(status)),
      [address]
    ),
    toggle: useCallback(
      () => remoteService.toggle(address).subscribe(console.info),
      [address]
    ),
  };
}

function Device({ address }: { address: string }) {
  const { status, getStatus, toggle } = useDevice(address);
  return (
    <div>
      <fieldset>
        <legend>Bulb {address}</legend>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            () => getStatus(),
            []
          )}
        >
          Status
        </button>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            () => toggle(),
            []
          )}
        >
          Toggle
        </button>
        <Json>{status}</Json>
      </fieldset>
    </div>
  );
}

export function RemoteWiz() {
  const { devices, discover } = useRemote();

  return (
    <div>
      <h3>WiZ</h3>
      <fieldset>
        <legend>Bulbs</legend>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            () => discover(),
            []
          )}
        >
          discover
        </button>
        <Json>{devices}</Json>
      </fieldset>
      {devices.map(({ address }) => (
        <Device key={address} address={address} />
      ))}
    </div>
  );
}
