import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import wifi from "node-wifi";

// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
  iface: null, // network interface, choose a random wifi interface if set to null
});

export default makeExecutableSchema({
  typeDefs: gql`
    scalar LanNetworks

    type LanQueries {
      scan: LanNetworks
      currentConnections: LanNetworks
    }

    type Query {
      lan: LanQueries
    }
  `,
  resolvers: {
    LanQueries: {
      // https://github.com/friedrith/node-wifi#getting-started
      currentConnections: async (_) => {
        // List the current wifi connections
        return wifi.getCurrentConnections();
      },
      scan: async (_) => {
        // All functions also return promise if there is no callback given
        return wifi.scan();
      },
    },
    Query: {
      lan: () => ({}),
    },
  },
});
