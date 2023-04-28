import { useCount } from '../hooks/useCount'

export const Count = () => {
  const { count, handleIncrement, handleDecrement, handleReset } = useCount()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}
