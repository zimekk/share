import React from "react";
import { useFiles } from "@dev/talks/src/services";
import styles from "./styles.module.scss";

export default function Browser() {
  const [{ files }] = useFiles();

  if (files === null) return "Loading...";

  return (
    <section className={styles.Browser}>
      {files.map(({ name }, key) => (
        <div key={key}>{name}</div>
      ))}
    </section>
  );
}
