import runGame from '../engine.js'
import { getRandomInt } from '../utils/random.js'

const DESCRIPTION = 'What number is missing in the progression?'
const LEN_MIN = 5
const LEN_MAX = 10
const START_MIN = 1
const START_MAX = 20
const STEP_MIN = 1
const STEP_MAX = 10

const buildProgression = (start, step, length) =>
  Array.from({ length }, (_, i) => start + i * step)

const makeRound = () => {
  const length = getRandomInt(LEN_MIN, LEN_MAX)
  const start = getRandomInt(START_MIN, START_MAX)
  const step = getRandomInt(STEP_MIN, STEP_MAX)

  const progression = buildProgression(start, step, length)

  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')
  return [question, correctAnswer]
}

const runProgressionGame = () => runGame(DESCRIPTION, makeRound)

export default runProgressionGame
