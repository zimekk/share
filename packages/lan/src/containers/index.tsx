import React, { useCallback, useEffect, useState } from "react";
import { gql } from "graphql-request";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { client, subscriptions } from "@dev/client";
import styles from "./styles.module.scss";

import type { WiFiNetwork } from "node-wifi";

class Service {
  client = client;
  subscriptions = subscriptions;
}

const SCAN = gql`
  query ScanQuery {
    lan {
      scan
    }
  }
`;

const GET_CURRENT_CONNECTIONS = gql`
  query GetCurrentConnectionsQuery {
    lan {
      currentConnections
    }
  }
`;

export class LanService extends Service {
  scan() {
    return from(this.client.request(SCAN)).pipe(
      map(({ lan: { scan } }) => scan)
    );
  }
  getCurrentConnections() {
    return from(this.client.request(GET_CURRENT_CONNECTIONS)).pipe(
      map(({ lan: { currentConnections } }) => currentConnections)
    );
  }
}

const service = new LanService();

export function useService() {
  const [data, setData] = useState<WiFiNetwork[] | null>(() => []);

  useEffect(() => {
    service.getCurrentConnections().subscribe((data) => setData(data));
  }, []);

  return {
    data,
    scan: useCallback(
      () => service.scan().subscribe((data) => setData(data)),
      []
    ),
  };
}

export default function Section() {
  const { data, scan } = useService();

  return (
    <div className={styles.Section}>
      <h2>Lan</h2>
      {data && (
        <table>
          <tbody>
            <tr>
              <th>ssid</th>
              <th>mac</th>
              <th>channel</th>
              <th>signal_level</th>
              <th>quality</th>
              <th>security</th>
            </tr>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{item.ssid}</td>
                <td>{item.mac}</td>
                <td>{item.channel}</td>
                <td>{item.signal_level}</td>
                <td>{item.quality}</td>
                <td>{item.security}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={() => scan()}>scan</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
