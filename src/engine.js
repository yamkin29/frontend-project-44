import readlineSync from 'readline-sync'
import runGreeting from './cli.js'

const runGame = (description, makeRound) => {
  const name = runGreeting()
  console.log(description)

  const ROUNDS_COUNT = 3

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = makeRound()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ').toLowerCase()

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGame
