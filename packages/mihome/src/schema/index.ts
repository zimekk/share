import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

const mihome = require("node-mihome");
// const miio = require("@rifat/miio");
// const MiioProtocolHelper = require('homebridge-miot/lib/tools/MiioProtocolHelper');

export default makeExecutableSchema({
  typeDefs: gql`
    scalar MiHomeDevices

    type MiHomeQueries {
      devices(username: String, password: String): MiHomeDevices
      device(did: String): MiHomeDevices
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
      device: async (_, { did }) => {
        return { did };
      },
    },
    Query: {
      miHome: () => ({}),
    },
  },
});
