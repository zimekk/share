import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { gql } from "graphql-request";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { client, subscriptions } from "@dev/client";
import styles from "./styles.module.scss";

class Service {
  client = client;
  subscriptions = subscriptions;
}

const MIHOME_DEVICES = gql`
  query MiHomeDevicesQuery($username: String, $password: String) {
    miHome {
      devices(username: $username, password: $password)
    }
  }
`;

const MIHOME_DEVICE = gql`
  query MiHomeDeviceQuery($did: String) {
    miHome {
      device(did: $did)
    }
  }
`;

export class MiHomeService extends Service {
  miHomeDevices(data) {
    return from(this.client.request(MIHOME_DEVICES, data)).pipe(
      map(({ miHome: { devices } }) => devices)
    );
  }
  miHomeDevice(data) {
    return from(this.client.request(MIHOME_DEVICE, data)).pipe(
      map(({ miHome: { device } }) => device)
    );
  }
}

const service = new MiHomeService();

interface Device {
  did: string;
  token: string;
  name: string;
  localip: string;
  mac: string;
  ssid: string;
  model: string;
  isOnline: boolean;
  desc: string;
}

export function useService() {
  const [data, setData] = useState<Device[] | null>(() => []);

  return {
    data,
    miHomeDevices: useCallback(
      (data) => service.miHomeDevices(data).subscribe((data) => setData(data)),
      []
    ),
    miHomeDevice: useCallback((data) => service.miHomeDevice(data), []),
  };
}

function Controls({ item, miHomeDevice }: { item: Device; miHomeDevice: any }) {
  useEffect(() => {
    handleClick;
  }, [item]);
  const handleClick = useCallback(() => miHomeDevice({ did: item.did }), []);
  return (
    <div>
      <button onClick={handleClick}>device</button>
    </div>
  );
}

export default function Section() {
  const [form, setForm] = useState(() => ({
    username: process.env.MI_USERNAME || "",
    password: process.env.MI_PASSWORD || "",
  }));
  const { data, miHomeDevices, miHomeDevice } = useService();

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setForm((form) => ({
        ...form,
        [target.name]: target.value,
      })),
    []
  );

  const handleSubmit = useCallback<ChangeEventHandler<HTMLFormElement>>((e) => {
    e.preventDefault();
    miHomeDevices(form);
  }, []);

  return (
    <div className={styles.Section}>
      <h2>MiHome</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <div>username</div>
          <input
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label>
          <div>password</div>
          <input
            name="username"
            type="text"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit">get-devices</button>
        </div>
      </form>
      {data && (
        <table>
          <tbody>
            <tr>
              <th>name</th>
              <th>localip</th>
              <th>ssid</th>
              <th>model</th>
              <th>desc</th>
              <th>controls</th>
            </tr>
            {data.map((item) => (
              <tr key={item.did}>
                <td>{item.name}</td>
                <td>{item.localip}</td>
                <td>{item.ssid}</td>
                <td>{item.model}</td>
                <td>{item.desc}</td>
                <td>
                  <Controls item={item} miHomeDevice={miHomeDevice} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
