import { gql } from "graphql-request";
import { from } from "rxjs";
import { Service } from "./Service";

const FILES = gql`
  query {
    files {
      name
    }
  }
`;

export class BrowserService extends Service {
  files() {
    return from(this.client.request(FILES));
  }
}
