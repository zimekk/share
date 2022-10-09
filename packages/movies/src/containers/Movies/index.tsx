import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject, from } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { gql } from "graphql-request";
import { client, subscriptions } from "@dev/client";
import { Artwork } from "../../components/Artwork";
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

function Filters({ filters, setFilters }: { filters: any; setFilters: any }) {
  return (
    <fieldset>
      <label>
        <span>Search</span>
        <input
          type="search"
          value={filters.search}
          onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                search: target.value,
              })),
            []
          )}
        />
      </label>
    </fieldset>
  );
}

function Movies({ movies }) {
  return (
    <div>
      {movies.map(({ artistName, artworkUrl100, trackName, trackId }) => (
        <div key={trackId} className={styles.Movie}>
          <Artwork src={artworkUrl100} className={styles.Artwork} />
          <h5>{trackName}</h5>
          <h6>{artistName}</h6>
        </div>
      ))}
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </div>
  );
}

export default function Section() {
  const [{ movies }] = useMovies();

  const [filters, setFilters] = useState(() => ({
    search: "",
  }));

  const [queries, setQueries] = useState(() => filters);

  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(
        map(({ search, ...filters }) =>
          JSON.stringify({
            ...queries,
            ...filters,
            search: search.toLowerCase().trim(),
          })
        ),
        distinctUntilChanged(),
        debounceTime(400)
      )
      .subscribe((filters) =>
        setQueries((queries) => ({ ...queries, ...JSON.parse(filters) }))
      );
    return () => subscription.unsubscribe();
  }, [search$]);

  useEffect(() => {
    search$.next(filters);
  }, [filters]);

  console.log({ filters, movies, queries });
  return (
    <section className={styles.Section}>
      <h2>Movies</h2>
      <Filters filters={filters} setFilters={setFilters} />
      <Movies
        movies={useMemo(
          () =>
            movies
              ? movies.movies.results.filter(
                  (item) =>
                    queries.search === "" ||
                    item.trackName.toLowerCase().match(queries.search)
                )
              : [],
          [movies, queries]
        )}
      />
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
