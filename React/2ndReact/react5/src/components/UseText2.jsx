import React from 'react'
import { useState } from 'react'

export default function UseText2() {
    const [count, setCount] = useState(0);

    function Increase() {
        setCount(count+1);
    }
    function Decrease() {
        setCount(count-2);
    }
  return (
    <div>
        <h3>Count : {count}</h3>
        <br />
        <button onClick={() => Decrease()}>-2</button>
        <button onClick={() => Increase()}>+1</button>
    </div>
  )
}
