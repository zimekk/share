import React, { useEffect, useState } from "react";
import { MoviesService } from "@dev/talks/src/services";
import styles from "./styles.module.scss";

const moviesService = new MoviesService();

function useMovies() {
  const [movies, setState] = useState(() => null);

  useEffect(() => {
    moviesService.getMovies().subscribe((data) => setState(data));
  }, []);

  return [{ movies }];
}

export default function Section({ version = "v1" }) {
  const [{ movies }] = useMovies();

  console.log({ movies });
  return (
    <section className={styles.Section}>
      <h2>Movies</h2>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </section>
  );
}
