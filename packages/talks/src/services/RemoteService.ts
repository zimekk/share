import { gql } from "graphql-request";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Service } from "./Service";

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
  query RemoteTvQuery($key: String) {
    remoteRcu(key: $key) {
      data
    }
  }
`;

const REMOTE_TV = gql`
  query RemoteTvQuery($action: String) {
    remoteTv(action: $action) {
      data
    }
  }
`;

const REMOTE_VCR = gql`
  query RemoteVcrQuery($action: String) {
    remoteVcr(action: $action) {
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
  getStatusAdb(location) {
    return from(this.client.request(GET_VERSION, { location })).pipe(
      map(({ version }) => version)
    );
  }
  getRemoteRcu(key: RcuKey) {
    return from(this.client.request(REMOTE_RCU, { key }));
  }
  getRemoteTv(action) {
    return from(this.client.request(REMOTE_TV, { action }));
  }
  getRemoteVcr(action) {
    return from(this.client.request(REMOTE_VCR, { action }));
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
