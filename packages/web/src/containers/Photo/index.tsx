import React, { useEffect, useRef } from "react";
import { augmentElementAsPlayer } from "livephotoskit";
import styles from "./styles.module.scss";

// https://developer.apple.com/live-photos/
export default function Section() {
  const ref = useRef(null);

  useEffect(() => {
    // A Player built from a pre-existing element:
    augmentElementAsPlayer(ref.current);
  }, []);

  return (
    <section className={styles.Section}>
      <div
        ref={ref}
        data-live-photo
        data-photo-src={require("./assets/girl.jpg").default}
        data-video-src={require("./assets/girl.mov").default}
        style={{
          width: 270,
          height: 360,
          margin: 20,
        }}
      >
        Loading...
      </div>
      <div>
        <a
          href="https://developer.apple.com/live-photos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://developer.apple.com/live-photos/
        </a>
      </div>
    </section>
  );
}
