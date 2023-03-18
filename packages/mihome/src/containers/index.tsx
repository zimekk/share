import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
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

export class MiHomeService extends Service {
  miHomeDevices(data) {
    return from(this.client.request(MIHOME_DEVICES, data)).pipe(
      map(({ miHome: { devices } }) => devices)
    );
  }
}

const service = new MiHomeService();

export function useService() {
  const [data, setData] = useState({});

  return {
    data,
    miHomeDevices: useCallback(
      (data) => service.miHomeDevices(data).subscribe((data) => setData(data)),
      []
    ),
  };
}

export default function Section() {
  const [form, setForm] = useState(() => ({
    username: process.env.MI_USERNAME || "",
    password: process.env.MI_PASSWORD || "",
  }));
  const { data, miHomeDevices } = useService();

  const handleChange = useCallback<ChangeEventHandler<HTMLFormElement>>(
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
