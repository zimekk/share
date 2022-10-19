import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { scheduleJob } from "node-schedule";
import { add } from "date-fns";

export default makeExecutableSchema({
  typeDefs: gql`
    type Mutation {
      create: String
    }
  `,
  resolvers: {
    Mutation: {
      create: (_) => {
        const date = add(Date.now(), {
          seconds: 5,
        });
        const job = scheduleJob(date, function () {
          console.log("The world is going to end today.");
        });
        console.log(["create"], job);
        return null;
      },
    },
  },
});
