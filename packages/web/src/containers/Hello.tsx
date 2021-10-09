import React from "react";
import { useHello } from "@dev/talks/src/services";
import styles from "./Hello.module.scss";

export default function Hello() {
  const [{ hello }] = useHello();

  if (hello === null) return "Loading...";

  return <h2 className={styles.Hello}>{hello}</h2>;
}
