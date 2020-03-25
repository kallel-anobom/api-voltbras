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
  suitablePlanets: (where?: SuitablePlanetsWhereInput) => Promise<boolean>;
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

  suitablePlanets: (
    where: SuitablePlanetsWhereUniqueInput
  ) => SuitablePlanetsNullablePromise;
  suitablePlanetses: (args?: {
    where?: SuitablePlanetsWhereInput;
    orderBy?: SuitablePlanetsOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<SuitablePlanets>;
  suitablePlanetsesConnection: (args?: {
    where?: SuitablePlanetsWhereInput;
    orderBy?: SuitablePlanetsOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => SuitablePlanetsConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSuitablePlanets: (
    data: SuitablePlanetsCreateInput
  ) => SuitablePlanetsPromise;
  updateSuitablePlanets: (args: {
    data: SuitablePlanetsUpdateInput;
    where: SuitablePlanetsWhereUniqueInput;
  }) => SuitablePlanetsPromise;
  updateManySuitablePlanetses: (args: {
    data: SuitablePlanetsUpdateManyMutationInput;
    where?: SuitablePlanetsWhereInput;
  }) => BatchPayloadPromise;
  upsertSuitablePlanets: (args: {
    where: SuitablePlanetsWhereUniqueInput;
    create: SuitablePlanetsCreateInput;
    update: SuitablePlanetsUpdateInput;
  }) => SuitablePlanetsPromise;
  deleteSuitablePlanets: (
    where: SuitablePlanetsWhereUniqueInput
  ) => SuitablePlanetsPromise;
  deleteManySuitablePlanetses: (
    where?: SuitablePlanetsWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  suitablePlanets: (
    where?: SuitablePlanetsSubscriptionWhereInput
  ) => SuitablePlanetsSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type SuitablePlanetsOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "mass_ASC"
  | "mass_DESC"
  | "hasStation_ASC"
  | "hasStation_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface SuitablePlanetsCreateInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  mass?: Maybe<Int>;
  hasStation?: Maybe<Boolean>;
}

export interface SuitablePlanetsWhereInput {
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
  mass?: Maybe<Int>;
  mass_not?: Maybe<Int>;
  mass_in?: Maybe<Int[] | Int>;
  mass_not_in?: Maybe<Int[] | Int>;
  mass_lt?: Maybe<Int>;
  mass_lte?: Maybe<Int>;
  mass_gt?: Maybe<Int>;
  mass_gte?: Maybe<Int>;
  hasStation?: Maybe<Boolean>;
  hasStation_not?: Maybe<Boolean>;
  AND?: Maybe<SuitablePlanetsWhereInput[] | SuitablePlanetsWhereInput>;
}

export interface SuitablePlanetsUpdateInput {
  name?: Maybe<String>;
  mass?: Maybe<Int>;
  hasStation?: Maybe<Boolean>;
}

export interface SuitablePlanetsUpdateManyMutationInput {
  name?: Maybe<String>;
  mass?: Maybe<Int>;
  hasStation?: Maybe<Boolean>;
}

export interface SuitablePlanetsSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<SuitablePlanetsWhereInput>;
  AND?: Maybe<
    | SuitablePlanetsSubscriptionWhereInput[]
    | SuitablePlanetsSubscriptionWhereInput
  >;
}

export type SuitablePlanetsWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateSuitablePlanets {
  count: Int;
}

export interface AggregateSuitablePlanetsPromise
  extends Promise<AggregateSuitablePlanets>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSuitablePlanetsSubscription
  extends Promise<AsyncIterator<AggregateSuitablePlanets>>,
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

export interface SuitablePlanetsPreviousValues {
  id: ID_Output;
  name?: String;
  mass?: Int;
  hasStation?: Boolean;
}

export interface SuitablePlanetsPreviousValuesPromise
  extends Promise<SuitablePlanetsPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  mass: () => Promise<Int>;
  hasStation: () => Promise<Boolean>;
}

export interface SuitablePlanetsPreviousValuesSubscription
  extends Promise<AsyncIterator<SuitablePlanetsPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  mass: () => Promise<AsyncIterator<Int>>;
  hasStation: () => Promise<AsyncIterator<Boolean>>;
}

export interface SuitablePlanetsEdge {
  node: SuitablePlanets;
  cursor: String;
}

export interface SuitablePlanetsEdgePromise
  extends Promise<SuitablePlanetsEdge>,
    Fragmentable {
  node: <T = SuitablePlanetsPromise>() => T;
  cursor: () => Promise<String>;
}

export interface SuitablePlanetsEdgeSubscription
  extends Promise<AsyncIterator<SuitablePlanetsEdge>>,
    Fragmentable {
  node: <T = SuitablePlanetsSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface SuitablePlanetsSubscriptionPayload {
  mutation: MutationType;
  node: SuitablePlanets;
  updatedFields: String[];
  previousValues: SuitablePlanetsPreviousValues;
}

export interface SuitablePlanetsSubscriptionPayloadPromise
  extends Promise<SuitablePlanetsSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SuitablePlanetsPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SuitablePlanetsPreviousValuesPromise>() => T;
}

export interface SuitablePlanetsSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SuitablePlanetsSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SuitablePlanetsSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SuitablePlanetsPreviousValuesSubscription>() => T;
}

export interface SuitablePlanets {
  id: ID_Output;
  name?: String;
  mass?: Int;
  hasStation?: Boolean;
}

export interface SuitablePlanetsPromise
  extends Promise<SuitablePlanets>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  mass: () => Promise<Int>;
  hasStation: () => Promise<Boolean>;
}

export interface SuitablePlanetsSubscription
  extends Promise<AsyncIterator<SuitablePlanets>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  mass: () => Promise<AsyncIterator<Int>>;
  hasStation: () => Promise<AsyncIterator<Boolean>>;
}

export interface SuitablePlanetsNullablePromise
  extends Promise<SuitablePlanets | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  mass: () => Promise<Int>;
  hasStation: () => Promise<Boolean>;
}

export interface SuitablePlanetsConnection {
  pageInfo: PageInfo;
  edges: SuitablePlanetsEdge[];
}

export interface SuitablePlanetsConnectionPromise
  extends Promise<SuitablePlanetsConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SuitablePlanetsEdge>>() => T;
  aggregate: <T = AggregateSuitablePlanetsPromise>() => T;
}

export interface SuitablePlanetsConnectionSubscription
  extends Promise<AsyncIterator<SuitablePlanetsConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SuitablePlanetsEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSuitablePlanetsSubscription>() => T;
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

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "SuitablePlanets",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
