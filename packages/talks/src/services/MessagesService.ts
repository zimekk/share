import { gql } from "graphql-request";
import { from, Observable } from "rxjs";
import { Service } from "./Service";

import type {
  Mutation,
  MutationSendMessageArgs,
  Query,
  Subscription,
} from "@dev/app/src/schema/types";

const MESSAGES = gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`;

const ON_MESSAGE = gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`;

// https://github.com/shammelburg/graphql-rxjs-angular/blob/main/src/app/services/graphql.service.ts
// https://codesandbox.io/s/push-based-react-lab-3-vc8d6?file=/src/users/state/users.service.ts
// https://jasonwatmore.com/post/2020/04/21/react-hooks-rxjs-communicating-between-components-with-observable-subject
export class MessagesService extends Service {
  getMessages() {
    return from<Promise<Query>>(this.client.request(MESSAGES));
  }
  sendMessage(message: MutationSendMessageArgs["message"]) {
    return from<Promise<Mutation>>(
      this.client.request(SEND_MESSAGE, { message })
    );
  }
  onMessage() {
    return new Observable<Subscription>((observer) =>
      this.subscriptions.subscribe(
        { query: ON_MESSAGE },
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
