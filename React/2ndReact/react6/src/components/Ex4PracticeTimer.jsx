import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export default function Ex4PracticeTimer() {
    const [timer, setTimer] = useState(1);
    const timerView = useRef(0);

    useEffect(() => {
        timerView.current.value = 0;
    }, []);
    // [] 으로 하면 마운트 될때에만 실행, 변수가 없어서 이후에는 실행이 안된다

    useEffect(() => {
        const timerFunction = setInterval(() => {
            setTimer(timer+1);
            console.log(timer);
        }, 1000)

        return (() => {
            clearInterval(timerFunction);
        });
    });

    const onCountSave = () => {
        timerView.current.value = timer;
    }

    // 선생님 풀이
    // const [render, setRender] = useState(false);
    // const time = useRef(0);
    // useEffect(() => {
    //     const timer2 = setInterval(() => {
    //         time.current += 1;
    //         console.log('2번 타이머: ', time.current);
    //     }, 1000);

    //     return (() => {
    //         clearInterval(timer2);
    //     });
    // }, []);

  return (
    <>
        <h1 ref={timerView}>{timerView.current.value}</h1>
        <button onClick={onCountSave}>시간</button>
    </>
  )
}
