import React, { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: '새싹' });
  console.log(state);

  //   구조분해 사용하면 return 내부에서 state.teacher => teacher 로 사용 가능
  //   const { teacher } = state;

  return (
    <div>
      <button
        onClick={() => {
          // 변경된 값이 console에는 찍히지만
          // 리렌더링이 발생하지 않는 것을 볼 수 있다.
          // 메모리 주소 값은 그대로라서 리렌더링이 발생하지 않는다.
          //   state.teacher = 'tetz';
          //   setState(state);
          //   console.log(state);

          // 해결법 - 새로운 객체 입력
          //   setState({ teacher: 'tetz' });
          //   console.log(state);

          //   해결법 - 전개 연산자
          state.teacher = 'tetz';
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
