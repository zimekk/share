import { gql } from "graphql-request";
import { from, Observable } from "rxjs";

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

// https://codesandbox.io/s/push-based-react-lab-3-vc8d6?file=/src/users/state/users.service.ts
export class MessagesService {
  constructor({ client, subscriptions }) {
    Object.assign(this, { client, subscriptions });
  }
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
          error: (error) => observer.error(error),
          complete: () => observer.complete(),
        }
      )
    );
  }
}
