import React from 'react'
import { useState } from 'react'
import Item from './Item';

export default function ConditionalRender() {
    const [condition, setCondition] = useState('보여주기');

    const onChange = () => {
        condition === '보여주기' ? setCondition('감추기') : setCondition('보여주기');
    }

    // JSX 문법으로 사용해보기
    const conditionRender = condition === '감추기' && <Item />;
  return (
    <div>
        {/* {condition === '감추기' && <Item />} */}

        {/* JSX 문법으로 사용해보기 */}
        {conditionRender}
        <button onClick={onChange}>{condition}</button>
    </div>
  )
}
