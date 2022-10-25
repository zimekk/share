import { useEffect, useState } from "react";
import { SensorService } from "./SensorService";

const sensorService = new SensorService();

export function useSensor() {
  const [{ measurements, values }, setState] = useState(() => ({
    measurements: null,
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

    sensorService
      .getMeasurements()
      .subscribe((measurements) =>
        setState((state) => ({ ...state, measurements }))
      );

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [
    { measurements, values },
    {
      addMeasurement: (data) => sensorService.addMeasurement(data),
    },
  ];
}
