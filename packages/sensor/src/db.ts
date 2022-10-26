import Redis from "ioredis";

const redis = new Redis({
  // host: config.redis.host,
  // port: config.redis.port,
  // password: config.redis.password,
});

const keyPrefix = "sensor";
const getKeyName = (...args) => `${keyPrefix}:${args.join(":")}`;

export const addMeasurement = async (measurement) => {
  console.log(["MEASUREMENT"], measurement);

  const pipeline = redis.pipeline();

  for (const obj of [measurement]) {
    pipeline.hset(getKeyName("measurements", obj.date), obj);
  }

  const responses = await pipeline.exec();

  console.log({ responses });
};

const MAX_SEARCH_RESULTS = 100;

export const getMeasurements = async () => {
  const [_, keys] = await redis.scan(
    0,
    "MATCH",
    getKeyName("measurements", "*"),
    "COUNT",
    MAX_SEARCH_RESULTS
  );
  const results = await Promise.all(
    keys.map(async (key) => await redis.hgetall(key))
  );
  console.log({ results });
  return results;
};

export const removeMeasurements = async (ids) => {
  const pipeline = redis.pipeline();

  for (const id of ids) {
    pipeline.del(getKeyName("measurements", id));
  }

  const responses = await pipeline.exec();
  console.log({ responses });
  return null;
};
