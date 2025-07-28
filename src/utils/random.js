import { randomInt } from 'node:crypto'

export const getRandomInt = (min, max) => randomInt(min, max + 1)
export const randomChoice = arr => arr[randomInt(arr.length)]
