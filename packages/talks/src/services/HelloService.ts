import { gql } from "graphql-request";
import { from } from "rxjs";
import { Service } from "./Service";

const HELLO = gql`
  query {
    hello
  }
`;

export class HelloService extends Service {
  hello() {
    return from(this.client.request(HELLO));
  }
}
