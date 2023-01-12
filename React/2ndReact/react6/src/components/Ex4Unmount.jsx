import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import Ex4PracticeTimer from './Ex4PracticeTimer';

export default function Ex4Unmount() {
    const [view, setView] = useState('보이기');
    const startBtn = useRef();

    const onChangeView = () => {
        view === '보이기' ? setView('숨기기') : setView('보이기');
    }

    useEffect(() => {
        startBtn.current.focus();
    });
    
  return (
    <div>
        {view === '숨기기' && <Ex4PracticeTimer />}
        <button onClick={onChangeView} ref={startBtn}>{view}</button>
    </div>
  )
}
