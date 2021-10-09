import { gql } from "graphql-request";
import { from } from "rxjs";

const HELLO = gql`
  query {
    hello
  }
`;

export class HelloService {
  constructor({ client }) {
    Object.assign(this, { client });
  }
  hello() {
    return from(this.client.request(HELLO));
  }
}
