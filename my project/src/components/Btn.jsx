import React, { useState } from 'react'

export const btn = () => {
    //it made variable count and put 3 and now updateing it
    const [count,countplus] = useState(3)
  function countplus(){
    count++
  }
    
  return (
    <div>
        <div>App {count}</div>
        <button onClick={countplus()}>Count</button>
    </div>
  )
}
