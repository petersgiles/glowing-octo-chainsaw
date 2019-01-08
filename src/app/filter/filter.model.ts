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