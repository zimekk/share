import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Async.module.scss";

const TIMER = 1000;
const DELAY = [0, 1000, 2000, 5000, 10000, 20000, 50000];

const format = (time: number) => new Date(time).toISOString().split("T").pop();

export default function Async() {
  const refConsole = useRef<HTMLTextAreaElement>();
  const [time, setTime] = useState(() => Date.now());
  const [delay, setDelay] = useState(() => 5000);

  const append = useCallback(
    (text) => {
      const console = refConsole.current;
      console.value = `${text}\n${console.value}`;
    },
    [refConsole]
  );

  const request = useCallback(
    (time: number) => {
      const curr = Date.now();
      append(`${format(curr)} <-- req`);

      return fetch("longpoll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ time, delay }),
      }).then(() => {
        const time = Date.now();
        append(`${format(time)} --> res | ${time - curr}`);
      });
    },
    [delay]
  );

  useEffect(() => {
    append(`----`);

    let timer: NodeJS.Timeout;
    let cancelled = false;

    const setTimer = (time: number) => {
      if (cancelled) {
        return;
      }
      const curr = Date.now();
      append(`${format(curr)} | ${format(time)} | ${curr - time}`);
      timer = setTimeout(() => {
        request(time)
          .then(() => setTimer(time + TIMER))
          .catch((e) => {
            const curr = Date.now();
            append(`${format(curr)} --> error [${e.message}]`);
            console.error(e);
          });
      }, TIMER);
    };

    setTimer(time);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <section className={styles.Section}>
      <h2>
        Async
        <button
          onClick={useCallback(
            (e) => (e.preventDefault(), (refConsole.current.value = "")),
            []
          )}
        >
          clear
        </button>
        <button
          onClick={useCallback(
            (e) => (e.preventDefault(), setTime(Date.now())),
            []
          )}
        >
          reset
        </button>
        <a
          href={`https://google.com/maps/dir/?api=1&destination=${52.226943},${20.9899221}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          maps
        </a>
        <select
          value={delay}
          onChange={useCallback(
            ({ target }) => setDelay(Number(target.value)),
            []
          )}
        >
          {DELAY.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </h2>
      <textarea ref={refConsole} readOnly className={styles.Console}></textarea>
    </section>
  );
}
