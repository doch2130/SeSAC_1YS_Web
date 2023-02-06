import React from 'react'
import { useRef } from 'react'

export default function ChangeFocus() {
    const input1 = useRef();
    const input2 = useRef();

    function changeFocusOne() {
        input1.current.focus();
    }
    const changeFocusTwo = () => {
        input2.current.focus();
    }
  return (
    <div>
        <input ref={input1} placeholder='1번' />&nbsp;
        <input ref={input2} placeholder='2번' />
        <br />
        <button onClick={changeFocusOne}>1번</button>&nbsp;
        <button onClick={changeFocusTwo}>2번</button>
    </div>
  )
}
