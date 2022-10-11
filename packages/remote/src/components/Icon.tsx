import React from "react";
import styles from "./styles.module.scss";

import type { IconType } from "@dev/device";

export function Icon({
  url,
  width,
  height,
  title,
}: IconType & { title: string }) {
  return (
    <img
      className={styles.Icon}
      src={url}
      width={width}
      height={height}
      title={title}
    />
  );
}
