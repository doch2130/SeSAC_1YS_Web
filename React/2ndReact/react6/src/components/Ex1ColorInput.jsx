import React from 'react'
import { useRef } from 'react'

export default function Ex1ColorInput() {
    const divMain = useRef();
    const inputText = useRef();
    const adjustCSS = () => {
        divMain.current.style.backgroundColor = inputText.current.value;
    }
  return (
    <div ref={divMain}>
        <input type="text" ref={inputText} />
        <br />
        <button onClick={adjustCSS}>색 적용</button>
    </div>
  )
}
