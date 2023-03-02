import React from "react"

function Input({inputText, handleChange, handleSubmit}) {

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputText}
        onChange={handleChange}
        pattern="[a-zA-Z]{5}"
        title="Only 5 letter words allowed"
      />
    </form>
  )
}

export default Input
