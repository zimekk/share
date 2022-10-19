import React, { MouseEventHandler, useCallback } from "react";
import { from } from "rxjs";
import { gql } from "graphql-request";
import { client, subscriptions } from "@dev/client";
import styles from "./styles.module.scss";

const CREATE = gql`
  mutation {
    create
  }
`;

class Service {
  client = client;
  subscriptions = subscriptions;
}

class ScheduleService extends Service {
  create() {
    return from(this.client.request(CREATE));
  }
}

const scheduleService = new ScheduleService();

function useSchedule() {
  return [{ create: () => scheduleService.create() }];
}

export default function Section() {
  const [{ create }] = useSchedule();

  return (
    <section className={styles.Section}>
      <h2>Schedule</h2>
      <fieldset>
        <legend>Trigger</legend>
        <button
          onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
            (event) => create(),
            []
          )}
        >
          Create
        </button>
      </fieldset>
    </section>
  );
}
