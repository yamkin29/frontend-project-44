import runGame from '../engine.js'

const isEven = num => num % 2 === 0

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".'

const makeRound = () => {
  const min = 1
  const max = 100
  const question = Math.floor(Math.random() * (max - min + 1)) + min
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const runEvenGame = () => runGame(DESCRIPTION, makeRound)

export default runEvenGame
