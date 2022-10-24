import { PubSub } from "graphql-subscriptions";
import { BehaviorSubject, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { Message } from "../gql-types";
import { CHANNELS } from "../../constants";

const pubsub = new PubSub();

const messages$ = new BehaviorSubject([]);

const message$ = new Subject();

// type Message = { uuid: string; text: string };

message$.pipe(tap(console.log)).subscribe((message) => {
  messages$.next(messages$.value.concat(message));
  pubsub.publish(CHANNELS.MESSAGE, { message });
});

// https://www.graphql-tools.com/docs/generate-schema
export default {
  Query: {
    messages: (): Message[] => messages$.value,
  },
  Mutation: {
    sendMessage: (_, { message }) => {
      message$.next(message);
      return true;
    },
  },
  Subscription: {
    message: {
      subscribe: () => pubsub.asyncIterator(CHANNELS.MESSAGE),
    },
  },
};
