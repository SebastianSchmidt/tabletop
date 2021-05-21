export enum Direction {
    North = 'north',
    South = 'south',
    West = 'west',
    East = 'east',
    None = 'none'
}

export interface Token {
    id: string
    color: string
    symbol: string
    direction: Direction
}

export interface TokenCreate {
    id: string
    x: number
    y: number
    color: string
    symbol: string
    direction: Direction
}

export interface TokenUpdate {
    id: string
    color?: string
    symbol?: string
    direction?: Direction
}
