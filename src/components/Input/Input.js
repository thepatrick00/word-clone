import React from "react"

function Input({ handleSubmitGuess, status }) {
  const [tentativeGuess, setGuess] = React.useState("")

  function handleChange(e) {
    let nextGuess = e.target.value.toUpperCase()
    if (nextGuess.length > 5) {
      alert("Only 5 letter words are allowed 💜")
      return
    }
    setGuess(nextGuess)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ tentativeGuess })
    handleSubmitGuess(tentativeGuess)

    setGuess("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={status !== 'running'}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleChange}
        title="Only 5 letter words allowed"
      />
    </form>
  )
}

export default Input
