import React from "react";
import { useHello } from "@dev/talks/src/services";
import styles from "./Hello.module.scss";

export default function Hello() {
  const [{ hello }] = useHello();

  return (
    <section>
      {hello === null ? (
        <div>Loading...</div>
      ) : (
        <h2 className={styles.Hello}>{hello}</h2>
      )}
    </section>
  );
}
