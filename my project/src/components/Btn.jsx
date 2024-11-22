import React, { useState } from 'react'

export const Btn = () => {
    //it made variable count and put 3 )and now updateing it
    const [count,setCount] = useState(0)
  function countplus(){
    setCount(count+1)
  }
    
  return (
    <div>
        <div>App {count}</div>
        <button onClick={countplus}>Count</button>
    </div>
  )
}
