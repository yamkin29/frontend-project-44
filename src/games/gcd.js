import runGame from '../engine.js'
import { getRandomInt } from '../utils/random.js'

const DESCRIPTION = 'Find the greatest common divisor of given numbers.'
const MIN = 1
const MAX = 100

const gcd = (a, b) => {
  let x = Math.abs(a)
  let y = Math.abs(b)
  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }
  return x
}

const makeRound = () => {
  const a = getRandomInt(MIN, MAX)
  const b = getRandomInt(MIN, MAX)
  const question = `${a} ${b}`
  const correctAnswer = String(gcd(a, b))
  return [question, correctAnswer]
}

const runGcdGame = () => runGame(DESCRIPTION, makeRound)

export default runGcdGame
