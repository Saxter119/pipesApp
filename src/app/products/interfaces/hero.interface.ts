
export enum Color { 'green', 'gray', 'blue', 'black', 'red' }

export interface Hero {
    name: string,
    canFly: boolean,
    color: Color
}