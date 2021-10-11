import { PubSub } from "graphql-subscriptions";
import { Subject } from "rxjs";
import { CHANNELS } from "../../constants";

const pubsub = new PubSub();

const message$ = new Subject();

const data = {
  // connections: [],
  messages: [],
};

type Message = { uuid: string; text: string };

const sendMessage = (message: Message) => {
  console.log({ message });
  // data.messages.push(message);
  // pubsub.publish(CHANNELS.MESSAGE, { message });
  message$.next(message);
};

message$.subscribe((message) => {
  console.log(message);
  pubsub.publish(CHANNELS.MESSAGE, { message });
});

// https://www.graphql-tools.com/docs/generate-schema
export default {
  Query: {
    messages: () => data.messages,
  },
  Mutation: {
    sendMessage: (_, { message }) => {
      sendMessage(message);
      return true;
    },
  },
  Subscription: {
    message: {
      subscribe: () => pubsub.asyncIterator(CHANNELS.MESSAGE),
    },
  },
};
