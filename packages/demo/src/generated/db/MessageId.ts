/* eslint-disable */
// tslint:disable
// this file is generated by a tool; don't change it manually.

export interface MessageId_QueryTypeMap {
  ["insert into messages(content)\n        values ($1)\n        returning id"]: {
    /** int4 (oid: 23) */
    id: number
  }
}

export type MessageId_UnionType = MessageId_QueryTypeMap[keyof MessageId_QueryTypeMap]

export type MessageId = {
  [K in keyof MessageId_UnionType]: MessageId_UnionType[K]
}
export const MessageId = {} as MessageId

export const MessageId_meta_v0 = [{"properties":[{"name":"id","value":"number","description":"int4 (oid: 23)"}],"description":"insert into messages(content)\n        values ($1)\n        returning id"}]