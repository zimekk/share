import { gql } from "graphql-request";
import { from, Observable } from "rxjs";
import { Service } from "./Service";

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
export class MessagesService extends Service {
  getMessages() {
    return from(this.client.request(MESSAGES));
  }
  sendMessage(message) {
    return from(this.client.request(SEND_MESSAGE, { message }));
  }
  onMessage() {
    return new Observable((observer) =>
      this.subscriptions.subscribe(
        { query: ON_MESSAGE },
        {
          next: ({ data, errors }) =>
            errors ? observer.error(errors[0]) : observer.next(data),
          error: (error: unknown) => observer.error(error),
          complete: () => observer.complete(),
        }
      )
    );
  }
}
