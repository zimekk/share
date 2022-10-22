import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { scheduleJob } from "node-schedule";
import { add } from "date-fns";

const CHANNEL = "JOB";

export default makeExecutableSchema({
  typeDefs: gql`
    type Mutation {
      create: String
    }
  `,
  resolvers: {
    Mutation: {
      create: (_root, _args, { pubsub }) => {
        const date = add(Date.now(), {
          seconds: 5,
        });
        const job = scheduleJob(date, function () {
          console.log("The world is going to end today.");
        });
        console.log(["scheduleJob"], job);

        pubsub.publish(CHANNEL, {
          schedule: Date.now(),
        });

        return null;
      },
    },
  },
});
