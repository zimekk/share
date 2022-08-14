import { gql } from "graphql-request";
import { Observable } from "rxjs";
import { Service } from "./Service";

const ON_SENSOR = gql`
  subscription SensorSubscription {
    sensor {
      value
    }
  }
`;

export class SensorService extends Service {
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
