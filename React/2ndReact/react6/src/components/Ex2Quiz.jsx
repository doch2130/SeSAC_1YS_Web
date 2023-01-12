import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

export default function Ex2Quiz() {
    // 리렌더를 위하여 num1, num2를 useState 방식으로 변경
    // num1만 useState 방식으로 하였으나, 이전과 동일한 값이 나오는 경우가 있어서
    // 렌더가 발생하지 않는 경우도 있어서 2개로 설정하였다.
    const [num1, setNum1] = useState(Math.floor(Math.random()*10));
    const [num2, setNum2] = useState(Math.floor(Math.random()*10));
    // Math.floor(소수점 버림 함수) => 0 ~ 9 정수만 나오게 설정
    // const num1 = Math.floor(Math.random()*10);
    // const num2 = Math.floor(Math.random()*10);

    const operator = ['+', '-', 'x'];
    const operatorNum = Math.floor(Math.random()*3);

    const userResult = useRef();

    const answerBtn = () => {
        if(operatorNum === 0) {
            if(Number(userResult.current.value) === num1 + num2) {
                alert('정답입니다.');
                setNum1(Math.floor(Math.random()*10));
                setNum2(Math.floor(Math.random()*10));
            } else {
                alert('틀렸습니다.');
            }
        } else if (operatorNum === 1) {
            if(Number(userResult.current.value) === num1 - num2) {
                alert('정답입니다.');
                setNum1(Math.floor(Math.random()*10));
                setNum2(Math.floor(Math.random()*10));
            } else {
                alert('틀렸습니다.');
            }
        } else if (operatorNum === 2) {
            if(Number(userResult.current.value) === num1 * num2) {
                alert('정답입니다.');
                setNum1(Math.floor(Math.random()*10));
                setNum2(Math.floor(Math.random()*10));
            } else {
                alert('틀렸습니다.');
            }
        }
        userResult.current.focus();
        userResult.current.value = '';
    }
  return (
    <div>
        <span>{num1}</span> <span>{operator[operatorNum]}</span> <span>{num2}</span>
        <br />
        <input type="text" ref={userResult}/>
        <button onClick={answerBtn}>정답 제출!</button>

    </div>
  )
}
