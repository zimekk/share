export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Measurement = {
  __typename?: "Measurement";
  date: Scalars["Date"];
  humidity: Scalars["Float"];
  temperature: Scalars["Float"];
};

export type MeasurementInput = {
  date: Scalars["Date"];
  humidity: Scalars["Float"];
  temperature: Scalars["Float"];
};

export type Mutation = {
  __typename?: "Mutation";
  addMeasurement?: Maybe<Scalars["Boolean"]>;
  removeMeasurements?: Maybe<Scalars["Boolean"]>;
};

export type MutationAddMeasurementArgs = {
  measurement: MeasurementInput;
};

export type MutationRemoveMeasurementsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  getMeasurements: Array<Measurement>;
};

export type Sensor = {
  __typename?: "Sensor";
  data?: Maybe<Scalars["String"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  sensor?: Maybe<Sensor>;
};
