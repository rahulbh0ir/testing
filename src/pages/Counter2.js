import React from 'react'
import useCounter from './hook/useCounter'

const Counter2 = () => {
  
  const [count, plus, minus, reset] = useCounter(10,10) 
    
  return (
    <>
        <h1>Counter 2</h1>
        <h3>{count}</h3>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>
        <button onClick={reset}>Reset</button>
    </>
    )
}

export default Counter2
