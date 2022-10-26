import { gql } from "graphql-request";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { client, subscriptions } from "@dev/client";

const ADD_MEASUREMENT = gql`
  mutation AddMeasurement($measurement: MeasurementInput) {
    addMeasurement(measurement: $measurement)
  }
`;

const REMOVE_MEASUREMENTS = gql`
  mutation RemoveMeasurements($ids: [String]) {
    removeMeasurements(ids: $ids)
  }
`;

const GET_MEASUREMENTS = gql`
  query GetMeasurements {
    getMeasurements {
      date
      temperature
      humidity
    }
  }
`;

const ON_SENSOR = gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`;

export class Service {
  client = client;
  subscriptions = subscriptions;
}

export class SensorService extends Service {
  addMeasurement(measurement) {
    return from(this.client.request(ADD_MEASUREMENT, { measurement }));
  }

  removeMeasurements(ids) {
    return from(this.client.request(REMOVE_MEASUREMENTS, { ids }));
  }

  getMeasurements() {
    return from(this.client.request(GET_MEASUREMENTS)).pipe(
      map(({ getMeasurements }) => getMeasurements)
    );
  }

  onSensor() {
    return new Observable((observer) =>
      this.subscriptions.subscribe(
        { query: ON_SENSOR },
        {
          next: ({ data, errors }) =>
            errors ? observer.error(errors[0]) : observer.next(data),
          error: (error) => observer.error(error),
          complete: () => observer.complete(),
        }
      )
    );
  }
}
