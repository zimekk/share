import { PubSub } from "graphql-subscriptions";
import { BehaviorSubject, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { CHANNELS } from "../../constants";

import type {
  Message,
  Mutation,
  MutationSendMessageArgs,
  Query,
} from "../types";

const pubsub = new PubSub();

const messages$ = new BehaviorSubject<Message[]>([]);

const message$ = new Subject<Message>();

message$.pipe(tap(console.log)).subscribe((message) => {
  messages$.next(messages$.value.concat(message));
  pubsub.publish(CHANNELS.MESSAGE, { message });
});

// https://www.graphql-tools.com/docs/generate-schema
export default {
  Query: {
    messages: (): Query["messages"] => messages$.value,
  },
  Mutation: {
    sendMessage: (
      _,
      { message }: MutationSendMessageArgs
    ): Mutation["sendMessage"] => {
      message$.next(message);
      return true;
    },
  },
  Subscription: {
    message: {
      subscribe: () => pubsub.asyncIterator([CHANNELS.MESSAGE]),
    },
  },
};
