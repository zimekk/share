import React, { Suspense, lazy, useEffect, useState } from "react";
import { gql, useSubscription } from "@apollo/client";
import { hot } from "react-hot-loader/root";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  hello: lazy(() => import("./Hello")),
};

const getPage = (location: { hash: string }) => {
  const [path, hash = Object.keys(PAGES)[0]] =
    decodeURI(location.hash).match(/^#(.+)/) || [];
  return hash;
};

const COUNTER = gql`
  subscription {
    counter {
      value
    }
  }
`;

function App() {
  const [page, setPage] = useState(getPage(history.location));
  const { data, error, loading } = useSubscription(COUNTER);

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setPage(getPage(location))
    )
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const Page = PAGES[page] || null;

  return (
    <section className={styles.App}>
      <h1 className={styles.Nav}>
        Hello
        {Object.keys(PAGES).map((page) => (
          <a key={page} href={`#${page}`}>
            {page}
          </a>
        ))}
        [{page}] [{data.counter.value}]
      </h1>
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    </section>
  );
}

export default hot(App);
