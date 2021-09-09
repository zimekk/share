import React from "react";
import { gql, useQuery } from "@apollo/client";
import styles from "./Hello.module.scss";

const HELLO = gql`
  query {
    hello
  }
`;

export default function Hello() {
  const { data, error, loading } = useQuery(HELLO);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <h2 className={styles.Hello}>{data.hello}</h2>;
}
