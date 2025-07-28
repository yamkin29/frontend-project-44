import runGame from '../engine.js'

const DESCRIPTION = 'What number is missing in the progression?'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const buildProgression = (start, step, length) =>
  Array.from({ length }, (_, i) => start + i * step)

const makeRound = () => {
  const length = getRandomInt(5, 10)
  const start = getRandomInt(1, 20)
  const step = getRandomInt(1, 10)
  const progression = buildProgression(start, step, length)

  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')
  return [question, correctAnswer]
}

const runProgressionGame = () => runGame(DESCRIPTION, makeRound)

export default runProgressionGame
