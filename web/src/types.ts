export interface Mutation {
  parent?: string
  parentDelimiter?: string
  gene?: string
  left?: string
  pos?: number
  right?: string
  version?: string
  note?: string
}

export type MutationColors = Record<string, string>

export enum GridBreakpoint {
  'xs' = '0',
  'sm' = '576px',
  'md' = '768px',
  'lg' = '992px',
  'xl' = '1200px',
  'xxl' = '1400px',
}
