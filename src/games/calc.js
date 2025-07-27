import runGame from '../engine.js'

const DESCRIPTION = 'What is the result of the expression?'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const options = ['+', '-', '*']

const makeRound = () => {
  const a = getRandomInt(1, 50)
  const b = getRandomInt(1, 50)
  const option = options[getRandomInt(0, options.length - 1)]

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
