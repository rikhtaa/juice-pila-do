import React, { useState } from 'react'

export const btn = () => {
    //it made variable count and put 3 and now updateing it
    const [count,setCount] = useState(3)
  function countplus(){
    setCount(count++)
  }
    
  return (
    <div>
        <div>App {count}</div>
        <button onClick={countplus()}>Count</button>
    </div>
  )
}
