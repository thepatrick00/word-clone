import React from "react"

import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

function Guess({ value, answer }) {
  const letterStatusArr = checkGuess(value, answer)

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            key={num}
            className={`cell ${
              letterStatusArr ? letterStatusArr[num].status : undefined
            }`}
          >
            {value?.[num]}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
