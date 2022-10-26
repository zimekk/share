import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { format } from "date-fns";
import styles from "./styles.module.scss";

export type Measurement = {
  id: string;
  date: number;
  temperature: number;
  humidity: number;
};

function Measurements({
  removeMeasurements,
  measurements,
}: {
  measurements: Measurement[];
}) {
  const [selected, setSelected] = useState<string[]>(() => []);

  return (
    <section className={styles.Measurements}>
      <table>
        <tbody>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selected.length === measurements.length}
                onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                  ({ target }) =>
                    setSelected(
                      target.checked ? measurements.map(({ id }) => id) : []
                    ),
                  []
                )}
              />
            </th>
            <th>Date</th>
            <th>Temperature</th>
            <th>Humidity</th>
          </tr>
          {measurements.map((item, i) => [
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(item.id)}
                  onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                    ({ target }) =>
                      setSelected((selected) =>
                        !target.checked
                          ? selected.filter((id) => id !== item.id)
                          : selected.concat(item.id)
                      ),
                    []
                  )}
                />
              </td>
              <td>{format(Number(item.date), "yyyy-MM-dd, HH:mm:ss")}</td>
              <td align="right">
                {`${new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.temperature)}°C`}
              </td>
              <td align="right">
                {`${new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.humidity)}%`}
              </td>
            </tr>,
          ])}
        </tbody>
      </table>
      <button
        disabled={selected.length === 0}
        onClick={useCallback<MouseEventHandler>(
          () => removeMeasurements(selected),
          [selected]
        )}
      >
        removeMeasurements
      </button>
    </section>
  );
}

export default function Sensor({
  addMeasurement,
  removeMeasurements,
  measurements,
}) {
  const list = useMemo(
    () =>
      measurements &&
      measurements
        .map((item) => ({ id: item.date, date: Number(item.date), ...item }))
        .sort((a, b) => b.date - a.date),
    [measurements]
  );

  return (
    <section>
      <span>Measurements</span>
      <button
        onClick={useCallback<MouseEventHandler>(
          () =>
            addMeasurement({ date: Date.now(), temperature: 22, humidity: 60 }),
          []
        )}
      >
        addMeasurement
      </button>
      {measurements === null ? (
        <div>Loading...</div>
      ) : (
        <Measurements
          removeMeasurements={removeMeasurements}
          measurements={list}
        />
      )}
    </section>
  );
}
