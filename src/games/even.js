import runGame from '../engine.js'
import { getRandomInt } from '../utils/random.js'

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".'
const MIN = 1
const MAX = 100

const isEven = num => num % 2 === 0

const makeRound = () => {
  const question = getRandomInt(MIN, MAX)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [String(question), correctAnswer]
}

const runEvenGame = () => runGame(DESCRIPTION, makeRound)

export default runEvenGame
