import React from "react"
import Input from "../Input"
import Guess from "../Guess"

import { sample, range } from "../../utils"
import { WORDS } from "../../data"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [inputText, setInputText] = React.useState("")
  const [guesses, setGuesses] = React.useState([])

  function handleChange(e) {
    setInputText(e.target.value.toUpperCase())
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputText)
    setInputText("")

    setGuesses([...guesses, { text: inputText, id: crypto.randomUUID() }])
  }
  // range( start, end, step)
  const rows = range(0, NUM_OF_GUESSES_ALLOWED, 1)
  return (
    <>
      <div className="guess-results">
        {rows.map((row, i) => {
          // nullish coalesing used b/c if index does not exist yet
          // then undefined, and undefined.text is error
          // also white space characters are truthy
          return <Guess guess={guesses[i]?.text || "     "} key={i} />
        })}
        {/* {guesses.map((guess) => (
          <Guess guess={guess.text} key={guess.id} />
        ))} */}
      </div>
      <Input
        inputText={inputText}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Game
