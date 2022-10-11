import { gql } from "graphql-request";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { client, subscriptions } from "@dev/client";

export class Service {
  client = client;
  subscriptions = subscriptions;
}

const GET_DEVICES = gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`;

const GET_VERSION = gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`;

const REMOTE_RCU = gql`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`;

const REMOTE_TV = gql`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`;

const REMOTE_VCR = gql`
  query RemoteVcrQuery($location: String, $action: String) {
    remoteVcr(location: $location, action: $action) {
      data
    }
  }
`;

const ON_REMOTE = gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`;

const SEND_REMOTE = gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;

type RcuKey = "KeyStandBy" | "KeyVolumeDown" | "KeyVolumeUp";

export class RemoteService extends Service {
  getDevices() {
    return from(this.client.request(GET_DEVICES)).pipe(
      map(({ devices }) => devices)
    );
  }
  getStatusAdb(location: string) {
    return from(this.client.request(GET_VERSION, { location })).pipe(
      map(({ version }) => version)
    );
  }
  getRemoteRcu(location: string, key: RcuKey) {
    return from(this.client.request(REMOTE_RCU, { location, key })).pipe(
      map(({ remoteRcu }) => remoteRcu)
    );
  }
  getRemoteTv(location: string, action: string) {
    return from(this.client.request(REMOTE_TV, { location, action }));
  }
  getRemoteVcr(location: string, action: string) {
    return from(this.client.request(REMOTE_VCR, { location, action }));
  }
  sendMessage(data) {
    return from(this.client.request(SEND_REMOTE, { data }));
  }
  onMessage() {
    return new Observable((observer) =>
      this.subscriptions.subscribe(
        { query: ON_REMOTE },
        {
          next: ({ data, errors }) =>
            errors ? observer.error(errors[0]) : observer.next(data.remote),
          error: (error) => observer.error(error),
          complete: () => observer.complete(),
        }
      )
    );
  }
}
