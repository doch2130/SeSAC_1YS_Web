import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function TestUseEffect() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('입력 하세요!');
    const inputValue = useRef();

    const onButtonClick = () => {
        console.log('🔲 버튼 클릭');
        setCount(count + 1);
    };

    const onInputChange = () => {
        console.log('⌨ 키 입력');
        setText(inputValue.current.value);
    };

    // 렌더링, 리렌더링 될때마다 실행된다.
    useEffect(() => {
        console.log('🎨 렌더링 될 때 실행');
    });

    // 배열안에 빈 값인 경우 최초 마운트 될 때만 실행된다.
    useEffect(() => {
        console.log('🐶 마운트 될 때만 실행');
    }, []);

    // count 변수가 리렌더링 될 때만 실행된다.
    useEffect(() => {
        console.log('⏹ 버튼 클릭 할 때만 실행');
    }, [count]);

    // text 변수가 리렌더링 될 때만 실행된다.
    useEffect(() => {
        console.log('💥 키 입력 할 때만 실행');
    }, [text]);

    // 1개의 useEffect에서 배열 안에 여러 state를 설정할 수 있다.
    useEffect(() => {
        console.log('💣 여러 개 설정 가능');
    }, [count, text]);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={onButtonClick}>+1 버튼</button>
        <br />
        <h1>{text}</h1>
        <input type="text" ref={inputValue} onChange={onInputChange} />
    </div>
  )
}
