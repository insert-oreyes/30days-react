import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [clicked, setClicked] = useState(0)

  const handleSum = () => {
    setCounter(counter + 1)
    setClicked(clicked + 1)
  }

  const handleSubs = () => {
    setCounter(counter - 1)
    setClicked(clicked + 1)
  }

  return (
    <>
      <span>Counter!</span>
      <span>Counter value {counter}</span>
      <button onClick={handleSum}>Increase + </button>
      <button onClick={handleSubs}>Decrease - </button>
      <span>Total clicks!{clicked}</span>
    </>
  )
}

export default Counter
