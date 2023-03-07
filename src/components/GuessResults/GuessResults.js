import React from "react"
import Guess from "../Guess/"

import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

const boardGuessRows = range(NUM_OF_GUESSES_ALLOWED)

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {boardGuessRows.map((num) => {
        return <Guess key={num} value={guesses?.[num]?.value} answer={answer} />
      })}
    </div>
  )
}

export default GuessResults
