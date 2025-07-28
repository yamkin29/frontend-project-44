import runGame from '../engine.js'
import { getRandomInt, randomChoice } from '../utils/random.js'

const DESCRIPTION = 'What is the result of the expression?'
const OPTIONS = ['+', '-', '*']
const MIN = 1
const MAX = 50

const makeRound = () => {
  const a = getRandomInt(MIN, MAX)
  const b = getRandomInt(MIN, MAX)
  const option = randomChoice(OPTIONS)

  let result
  switch (option) {
    case '+':
      result = a + b
      break
    case '-':
      result = a - b
      break
    case '*':
      result = a * b
      break
    default:
      throw new Error('Unknown operator')
  }

  return [`${a} ${option} ${b}`, String(result)]
}

const runCalcGame = () => runGame(DESCRIPTION, makeRound)

export default runCalcGame
