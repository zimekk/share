import { gql } from "graphql-request";
import { from } from "rxjs";
import { map } from "rxjs/operators";

import { Service } from "./RemoteService";

const GET_DEVICES = gql`
  query GetDevicesQuery {
    lights {
      devices {
        address
      }
    }
  }
`;

const GET_STATUS = gql`
  query GetStatusQuery($address: String) {
    lights {
      status(address: $address) {
        mac
        state
      }
    }
  }
`;

const TOGGLE_STATE = gql`
  query ToggleStateQuery($address: String) {
    lights {
      toggle(address: $address)
    }
  }
`;

const BRIGHTNESS = gql`
  query BrightnessQuery($address: String, $brightness: Int) {
    lights {
      brightness(address: $address, brightness: $brightness)
    }
  }
`;

export class LightsService extends Service {
  getDevices() {
    return from(this.client.request(GET_DEVICES)).pipe(
      map(({ lights }) => lights)
    );
  }
  getStatus(address: string) {
    return from(this.client.request(GET_STATUS, { address })).pipe(
      map(({ lights }) => lights)
    );
  }
  toggle(address: string) {
    return from(this.client.request(TOGGLE_STATE, { address })).pipe(
      map(({ lights }) => lights)
    );
  }
  setBrightness(address: string, brightness: number) {
    return from(this.client.request(BRIGHTNESS, { address, brightness })).pipe(
      map(({ lights }) => lights)
    );
  }
}
