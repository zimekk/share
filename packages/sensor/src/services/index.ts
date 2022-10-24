import { useEffect, useState } from "react";
import { SensorService } from "./SensorService";

const sensorService = new SensorService();

export function useSensor() {
  const [{ values }, setState] = useState(() => ({
    values: null,
  }));

  useEffect(() => {
    const subscriptions = [
      sensorService.onSensor().subscribe(({ sensor }) =>
        setState(({ values, ...state }) => ({
          ...state,
          values: (values || []).concat([sensor]),
        }))
      ),
    ];
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [
    { values },
    {
      addMeasurement: (data) => sensorService.addMeasurement(data),
    },
  ];
}
