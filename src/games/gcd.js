import runGame from '../engine.js'

const DESCRIPTION = 'Find the greatest common divisor of given numbers.'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

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
  const a = getRandomInt(1, 100)
  const b = getRandomInt(1, 100)
  const question = `${a} ${b}`
  const correctAnswer = String(gcd(a, b))
  return [question, correctAnswer]
}

const runGcdGame = () => runGame(DESCRIPTION, makeRound)

export default runGcdGame
