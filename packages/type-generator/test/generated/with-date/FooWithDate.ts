/* eslint-disable */
// tslint:disable
// this file is generated by a tool; don't change it manually.

export interface FooWithDate_QueryTypeMap {
  ["select d from foo where d is not null"]: {
    /** timestamptz (oid: 1184) */
    d: Date
  }
}

export type FooWithDate_UnionType = FooWithDate_QueryTypeMap[keyof FooWithDate_QueryTypeMap]

export type FooWithDate = {
  [K in keyof FooWithDate_UnionType]: FooWithDate_UnionType[K]
}

export const FooWithDate_meta_v0 = [{"properties":[{"name":"d","value":"Date","description":"timestamptz (oid: 1184)"}],"description":"select d from foo where d is not null"}]
