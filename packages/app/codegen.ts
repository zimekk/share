import { CodegenConfig } from "@graphql-codegen/cli";

// https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config
export default {
  schema: "src/schema/types/*.graphql",
  generates: {
    "src/schema/types.d.ts": {
      plugins: ["typescript"],
    },
  },
} as CodegenConfig;
