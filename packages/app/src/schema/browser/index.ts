import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { SMBSession } from "libdsm";

const { SMB_SERVER, SMB_USER, SMB_PASSWORD, SMB_SHARE, SMB_FILES } =
  process.env;

export default makeExecutableSchema({
  typeDefs: gql`
    type File {
      name: String
    }

    type Query {
      files(name: String): [File]
    }
  `,
  resolvers: {
    Query: {
      files: (_, { name = "file" }) => {
        const session = new SMBSession({
          server: SMB_SERVER, // hostname or IP
          user: SMB_USER,
          password: SMB_PASSWORD,
        });
        return session
          .connect()
          .then(() => {
            console.log("Connected to server");

            return session
              .connect()
              .then(() => {
                return session.connectToSharedFolder(SMB_SHARE);
              })
              .then((share) => {
                console.log(`Connected to shared folder ${SMB_SHARE}`);

                return share.listFiles(SMB_FILES).then((files) => {
                  return files.map((name) => ({ name }));
                });
              });
          })
          .then((files) => {
            console.log({ files });
            // session.disconnect();
            return files;
          });
      },
    },
  },
});
