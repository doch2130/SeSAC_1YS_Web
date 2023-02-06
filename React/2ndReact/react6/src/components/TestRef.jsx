import React, { useRef } from 'react'
import { useState } from 'react'

export default function TestRef() {
    const [text, setText] = useState('안녕하세요');
    function onChangeText(e) {
        const inputText = e.target.value;
        setText(inputText);
    }

    // useRef 사용
    const inputValue = useRef();
    function onChangeText2() {
        // inputValue 까지는 객체 값이고 current 까지 접근해야 DOM에 접근한다.
        // console.log(inputValue);
        setText(inputValue.current.value);
    }
  return (
    <div>
        <h1>{text}</h1>
        {/* 기존 JS 사용 */}
        <label>기존 JS + useState </label>
        <input type="text" onChange={(e) => { onChangeText(e) }} />
        <br />
        <br />
        {/* useRef 사용 */}
        <label>useRef </label>
        <input type="text" ref={inputValue} onChange={onChangeText2} />
    </div>
  )
}
