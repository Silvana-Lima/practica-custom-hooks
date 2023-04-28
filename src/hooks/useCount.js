import { useState } from 'react'

export const useCount = (initValue = 0) => {
  const [count, setCount] = useState(initValue)
  const handleIncrement = () => setCount((prev) => prev + 1)
  const handleDecrement = () => setCount((prev) => prev - 1)
  const handleReset = () => setCount(initValue)

  return { count, handleDecrement, handleIncrement, handleReset }
}
