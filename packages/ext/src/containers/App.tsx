import React, { Suspense, lazy, useEffect, useState } from "react";
// import { hot } from "react-hot-loader/root";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  photos: lazy(() => import("@dev/photos")),
};

const getPage = (location: { hash: string }) => {
  const [_, hash] = decodeURI(location.hash).match(/^#([-\w]+)/) || [];
  return ((keys) => (keys.includes(hash) ? hash : keys[0]))(
    Object.keys(PAGES)
  ) as keyof typeof PAGES;
};

function App() {
  const [page, setPage] = useState(getPage(history.location));

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location }) => setPage(getPage(location)))
  );

  const Page = PAGES[page];

  return (
    <section className={styles.App}>
      <h1 className={styles.Nav}>
        Share
        {Object.keys(PAGES).map((page) => (
          <a key={page} href={`#${page}`}>
            {page}
          </a>
        ))}
      </h1>
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    </section>
  );
}

export default App;
