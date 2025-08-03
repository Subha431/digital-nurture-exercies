import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    
    function handleClickIncrease(){
      setCount(count + 1);
      alert("Hello Member1")
    }
    function handleClickDecrease(){
      setCount(count - 1);
    }

  return (
    <div>
      <p>Value of Counter is: {count}</p>
      <button onClick={handleClickIncrease}>Increment</button>
      <button onClick={handleClickDecrease}>Decrement</button>
    </div>
  )
}

export default Counter
