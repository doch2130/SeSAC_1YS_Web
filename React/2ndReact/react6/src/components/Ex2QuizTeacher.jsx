import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

// 선생님 풀이
export default function Ex2QuizTeacher() {
    const firstRandomNumber = Math.floor(Math.random() * 10);
    const secondRandomNumber = Math.floor(Math.random() * 10);
    const arithmeticArr = ['+', '-', 'x'];
    const arithmetic = Math.floor(Math.random() * 3);

    let answer = 0;
    if (arithmetic === 0) {
        answer = firstRandomNumber + secondRandomNumber;
    } else if (arithmetic === 1) {
        answer = firstRandomNumber - secondRandomNumber;
    } else {
        answer = firstRandomNumber * secondRandomNumber;
    }

    const checkAnswer = () => {
        if (answer === Number(userInput.current.value)) {
            alert('정답입니다.');
            setAgain(!again);
        } else {
            alert('틀렸습니다.');
        }
        userInput.current.focus();
        userInput.current.value = '';
    }

    const userInput = useRef();
    // 렌더링 전용 함수
    // 이전 값과 상관 없이 무조건 바뀌기 때문에 편리하게 사용할 수 있다.
    const [again, setAgain] = useState(false);

  return (
    <div>
        <h1>{firstRandomNumber} {arithmeticArr[arithmetic]} {secondRandomNumber}</h1>
        <input type="text" ref={userInput}/>
        <button onClick={checkAnswer}>정답 제출!</button>
    </div>
  )
}
