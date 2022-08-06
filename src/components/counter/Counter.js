import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [clicked, setClicked] = useState(0)

  const handleIncrease = () => {
    setCounter(counter + 1)
    setClicked(clicked + 1)
  }

  const handleDecrease = () => {
    setCounter(counter - 1)
    setClicked(clicked + 1)
  }

  return (
    <>
      <span>{counter}</span>
      <button onClick={handleIncrease}>Increase +</button>
      <button onClick={handleDecrease}>Decrease -</button>
      <span>Times clicked:{clicked}</span>
    </>
  )
}

export default Counter
