import React from 'react'
import { useState } from 'react'
import Ex3PracticeOne from './Ex3PracticeOne';
import Ex3PracticeTwo from './Ex3PracticeTwo';

export default function Ex3Conditional() {
    const [numBtn, setNumBtn] = useState('1번');

    const changeNum = () => {
        numBtn === '1번' ? setNumBtn('2번') : setNumBtn('1번');
    }

    const numBtnRender = numBtn === '1번' ? <Ex3PracticeOne title={'1번 컴포넌트'} /> : <Ex3PracticeTwo title={'2번 컴포넌트'} />;

    // 선생님 풀이
    const [condition, setCondition] = useState('1번');
    const onChange = () => {
        condition === '1번' ? setCondition('2번') : setCondition('1번');
    }
  return (
    <div>
        {numBtnRender}
        <button onClick={changeNum}>{numBtn}</button>

        {/* 선생님 풀이 */}
        {condition === '1번' ? <Ex3PracticeOne title={condition} /> : <Ex3PracticeTwo title={condition} />}
        <button onClick={onChange}>{condition}</button>
    </div>
  )
}
