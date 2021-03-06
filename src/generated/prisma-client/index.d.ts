// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  suitablePlanet: (where?: SuitablePlanetWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  suitablePlanet: (
    where: SuitablePlanetWhereUniqueInput
  ) => SuitablePlanetNullablePromise;
  suitablePlanets: (args?: {
    where?: SuitablePlanetWhereInput;
    orderBy?: SuitablePlanetOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<SuitablePlanet>;
  suitablePlanetsConnection: (args?: {
    where?: SuitablePlanetWhereInput;
    orderBy?: SuitablePlanetOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => SuitablePlanetConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSuitablePlanet: (
    data: SuitablePlanetCreateInput
  ) => SuitablePlanetPromise;
  updateSuitablePlanet: (args: {
    data: SuitablePlanetUpdateInput;
    where: SuitablePlanetWhereUniqueInput;
  }) => SuitablePlanetPromise;
  updateManySuitablePlanets: (args: {
    data: SuitablePlanetUpdateManyMutationInput;
    where?: SuitablePlanetWhereInput;
  }) => BatchPayloadPromise;
  upsertSuitablePlanet: (args: {
    where: SuitablePlanetWhereUniqueInput;
    create: SuitablePlanetCreateInput;
    update: SuitablePlanetUpdateInput;
  }) => SuitablePlanetPromise;
  deleteSuitablePlanet: (
    where: SuitablePlanetWhereUniqueInput
  ) => SuitablePlanetPromise;
  deleteManySuitablePlanets: (
    where?: SuitablePlanetWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  suitablePlanet: (
    where?: SuitablePlanetSubscriptionWhereInput
  ) => SuitablePlanetSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type SuitablePlanetOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "mass_ASC"
  | "mass_DESC"
  | "hasStation_ASC"
  | "hasStation_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type SuitablePlanetWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface SuitablePlanetWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  mass?: Maybe<Float>;
  mass_not?: Maybe<Float>;
  mass_in?: Maybe<Float[] | Float>;
  mass_not_in?: Maybe<Float[] | Float>;
  mass_lt?: Maybe<Float>;
  mass_lte?: Maybe<Float>;
  mass_gt?: Maybe<Float>;
  mass_gte?: Maybe<Float>;
  hasStation?: Maybe<Boolean>;
  hasStation_not?: Maybe<Boolean>;
  AND?: Maybe<SuitablePlanetWhereInput[] | SuitablePlanetWhereInput>;
}

export interface SuitablePlanetCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  mass: Float;
  hasStation: Boolean;
}

export interface SuitablePlanetUpdateInput {
  name?: Maybe<String>;
  mass?: Maybe<Float>;
  hasStation?: Maybe<Boolean>;
}

export interface SuitablePlanetUpdateManyMutationInput {
  name?: Maybe<String>;
  mass?: Maybe<Float>;
  hasStation?: Maybe<Boolean>;
}

export interface SuitablePlanetSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<SuitablePlanetWhereInput>;
  AND?: Maybe<
    | SuitablePlanetSubscriptionWhereInput[]
    | SuitablePlanetSubscriptionWhereInput
  >;
}

export interface NodeNode {
  id: ID_Output;
}

export interface SuitablePlanet {
  id: ID_Output;
  name: String;
  mass: Float;
  hasStation: Boolean;
}

export interface SuitablePlanetPromise
  extends Promise<SuitablePlanet>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  mass: () => Promise<Float>;
  hasStation: () => Promise<Boolean>;
}

export interface SuitablePlanetSubscription
  extends Promise<AsyncIterator<SuitablePlanet>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  mass: () => Promise<AsyncIterator<Float>>;
  hasStation: () => Promise<AsyncIterator<Boolean>>;
}

export interface SuitablePlanetNullablePromise
  extends Promise<SuitablePlanet | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  mass: () => Promise<Float>;
  hasStation: () => Promise<Boolean>;
}

export interface SuitablePlanetConnection {
  pageInfo: PageInfo;
  edges: SuitablePlanetEdge[];
}

export interface SuitablePlanetConnectionPromise
  extends Promise<SuitablePlanetConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SuitablePlanetEdge>>() => T;
  aggregate: <T = AggregateSuitablePlanetPromise>() => T;
}

export interface SuitablePlanetConnectionSubscription
  extends Promise<AsyncIterator<SuitablePlanetConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SuitablePlanetEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSuitablePlanetSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface SuitablePlanetEdge {
  node: SuitablePlanet;
  cursor: String;
}

export interface SuitablePlanetEdgePromise
  extends Promise<SuitablePlanetEdge>,
    Fragmentable {
  node: <T = SuitablePlanetPromise>() => T;
  cursor: () => Promise<String>;
}

export interface SuitablePlanetEdgeSubscription
  extends Promise<AsyncIterator<SuitablePlanetEdge>>,
    Fragmentable {
  node: <T = SuitablePlanetSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateSuitablePlanet {
  count: Int;
}

export interface AggregateSuitablePlanetPromise
  extends Promise<AggregateSuitablePlanet>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSuitablePlanetSubscription
  extends Promise<AsyncIterator<AggregateSuitablePlanet>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface SuitablePlanetSubscriptionPayload {
  mutation: MutationType;
  node: SuitablePlanet;
  updatedFields: String[];
  previousValues: SuitablePlanetPreviousValues;
}

export interface SuitablePlanetSubscriptionPayloadPromise
  extends Promise<SuitablePlanetSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SuitablePlanetPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SuitablePlanetPreviousValuesPromise>() => T;
}

export interface SuitablePlanetSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SuitablePlanetSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SuitablePlanetSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SuitablePlanetPreviousValuesSubscription>() => T;
}

export interface SuitablePlanetPreviousValues {
  id: ID_Output;
  name: String;
  mass: Float;
  hasStation: Boolean;
}

export interface SuitablePlanetPreviousValuesPromise
  extends Promise<SuitablePlanetPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  mass: () => Promise<Float>;
  hasStation: () => Promise<Boolean>;
}

export interface SuitablePlanetPreviousValuesSubscription
  extends Promise<AsyncIterator<SuitablePlanetPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  mass: () => Promise<AsyncIterator<Float>>;
  hasStation: () => Promise<AsyncIterator<Boolean>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "SuitablePlanet",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
