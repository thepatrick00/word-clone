import React from "react"
import Input from "../Input"
import GuessResults from "../GuessResults"
import WonBanner from "../WonBanner"
import LostBanner from "../LostBanner"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

import { sample } from "../../utils"
import { WORDS } from "../../data"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  // running, won, lost statuses
  const [status, setStatus] = React.useState("running")

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = {
      value: tentativeGuess,
      id: Math.random(),
    }
    const nextGuesses = [...guesses, nextGuess]
    setGuesses(nextGuesses)

    if (tentativeGuess.toUpperCase() === answer) {
      setStatus("won")
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost")
    }
  }
  return (
    <>
      <div className="guess-results">
        <GuessResults guesses={guesses} answer={answer} />
      </div>
      <Input handleSubmitGuess={handleSubmitGuess} status={status} />

      {status === "won" && <WonBanner guessesLength={guesses.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
