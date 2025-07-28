import runGame from '../engine.js'

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const isPrime = (n) => {
  if (n < 2) return false
  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) return false
  }
  return true
}

const makeRound = () => {
  const number = getRandomInt(2, 200)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [String(number), correctAnswer]
}

const runPrimeGame = () => runGame(DESCRIPTION, makeRound)

export default runPrimeGame
