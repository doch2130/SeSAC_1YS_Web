import React from 'react'
import { useState } from 'react';
import Timer from './Timer';

export default function ShowTimer() {
    const [show, setShow] = useState(false);
  return (
    // show가 True로 변경하면서 Timer 컴포넌트가 출력된다.
    // Timer 컴포넌트가 Mount되면서 useEffect()가 1번 실행된다.
    <div>
        {show && <Timer />}
        <button onClick={() => setShow(!show)}>버튼</button>
    </div>
  )
}
