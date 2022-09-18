import { PubSub } from "graphql-subscriptions";

const context = {
  pubsub: new PubSub(),
};

export const scan = () => {
  console.log(["scan"]);
  require("@dev/sensor").signal(context);
};
