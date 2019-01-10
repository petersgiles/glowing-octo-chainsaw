export interface FilterItem {
    id: string
    name: string
}

export interface FilterGroup {
    id: string
    name: string
    items: FilterItem[]
    internalOperand: Operand
    externalOperand: Operand
}

export enum Operand {
    AND,
    OR
}

export interface RefinerType {
    id: number | string
    groupId: number | string
    title: string
    selected: boolean
    count?: number
}

export interface RefinerGroup {
    id: number | string
    title: string
    expanded: boolean
    custom?: boolean
    count?: number
    children: RefinerType[]
}