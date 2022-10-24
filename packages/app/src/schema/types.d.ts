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
};

export type Message = {
  __typename?: "Message";
  text?: Maybe<Scalars["String"]>;
  uuid?: Maybe<Scalars["String"]>;
};

export type MessageInput = {
  text?: InputMaybe<Scalars["String"]>;
  uuid?: InputMaybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  sendMessage?: Maybe<Scalars["Boolean"]>;
};

export type MutationSendMessageArgs = {
  message?: InputMaybe<MessageInput>;
};

export type Query = {
  __typename?: "Query";
  messages?: Maybe<Array<Maybe<Message>>>;
};

export type Subscription = {
  __typename?: "Subscription";
  message?: Maybe<Message>;
};
