import runGame from '../engine.js'
import { getRandomInt } from '../utils/random.js'

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const MIN = 2
const MAX = 200

const isPrime = (n) => {
  if (n < 2) return false
  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) return false
  }
  return true
}

const makeRound = () => {
  const number = getRandomInt(MIN, MAX)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [String(number), correctAnswer]
}

const runPrimeGame = () => runGame(DESCRIPTION, makeRound)

export default runPrimeGame
