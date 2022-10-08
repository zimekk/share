import { gql } from "graphql-request";
import { from } from "rxjs";
import { Service } from "./Service";

const MOVIES = gql`
  query {
    movies
  }
`;

export class MoviesService extends Service {
  getMovies() {
    return from(this.client.request(MOVIES));
  }
}
