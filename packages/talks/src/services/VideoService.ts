import { gql } from "graphql-request";
import { from, Observable } from "rxjs";
import { Service } from "./Service";

const ON_SIGNAL = gql`
  subscription SignalSubscription {
    signal {
      sdp
      type
      candidate {
        candidate
        sdpMLineIndex
        sdpMid
      }
    }
  }
`;

const SEND_SIGNAL = gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`;

export class VideoService extends Service {
  sendSignal(signal) {
    return from(this.client.request(SEND_SIGNAL, { signal }));
  }
  onSignal() {
    return new Observable((observer) =>
      this.subscriptions.subscribe(
        { query: ON_SIGNAL },
        {
          next: ({ data, errors }) =>
            errors ? observer.error(errors[0]) : observer.next(data),
          error: (error) => observer.error(error),
          complete: () => observer.complete(),
        }
      )
    );
  }
}
