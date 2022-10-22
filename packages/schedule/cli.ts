import Queue from "bull";
import type { PubSub } from "graphql-subscriptions";

// https://github.com/OptimalBits/bull#basic-usage
const queue = new Queue("schedule")
  .on("progress", ({ id, name, processedOn }, progress) =>
    console.log(["progress"], progress, { id, name, processedOn })
  )
  .on("completed", ({ id, name, opts, finishedOn }, result) =>
    console.log(["completed"], result, { id, name, opts, finishedOn })
  );

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const CHANNEL = "JOB";

export const register = ({ pubsub }: { pubsub: PubSub }) => {
  pubsub.subscribe(CHANNEL, (data) =>
    queue.add(data).then((job) => {
      console.log(["queue.add"], job);
      return job.id;
    })
  );
};

// https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md
export const schedule = async () => {
  console.log(["schedule"]);

  await queue
    .add({
      schedule: 5,
    })
    .then(({ id, data }) => console.log(["add"], { id, data }));

  await queue.close().then(() => console.log(["close"]));
};

export const work = () => {
  console.log(["work"]);

  queue.process(async (job, done) => {
    console.log(["process"], job.data);
    for (let i = 0; i < 10; i++) {
      await delay();
      await job.progress(i);
    }
    return done(null, { result: job.data });
  });
};
