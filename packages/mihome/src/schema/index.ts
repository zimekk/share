import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

const mihome = require("node-mihome");

export default makeExecutableSchema({
  typeDefs: gql`
    scalar MiHomeDevices

    type MiHomeQueries {
      devices(username: String, password: String): MiHomeDevices
    }

    type Query {
      miHome: MiHomeQueries
    }
  `,
  resolvers: {
    MiHomeQueries: {
      devices: async (_, { username, password }) => {
        // https://github.com/maxinminax/node-mihome
        const options = { country: "de" };
        await mihome.miCloudProtocol.login(username, password);
        return await mihome.miCloudProtocol.getDevices(null, options);
      },
    },
    Query: {
      miHome: () => ({}),
    },
  },
});
