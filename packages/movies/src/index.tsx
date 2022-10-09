import React, { useEffect, useState } from "react";
import { from } from "rxjs";
import { gql } from "graphql-request";
import { client, subscriptions } from "@dev/client";
import styles from "./styles.module.scss";

const MOVIES = gql`
  query {
    movies
  }
`;

class Service {
  client = client;
  subscriptions = subscriptions;
}

class MoviesService extends Service {
  getMovies() {
    return from(this.client.request(MOVIES));
  }
}

const moviesService = new MoviesService();

function useMovies() {
  const [movies, setState] = useState(() => null);

  useEffect(() => {
    moviesService.getMovies().subscribe((data) => setState(data));
  }, []);

  return [{ movies }];
}

export default function Section() {
  const [{ movies }] = useMovies();

  console.log({ movies });
  return (
    <section className={styles.Section}>
      <h2>Movies</h2>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
      <a
        href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html
      </a>
    </section>
  );
}
