import React, { useState } from 'react';

export default function ArrayState() {
  // [0] 에는 메모리 주소값이 들어가 있다.
  const [state, setState] = useState([0]);
  console.log(state);
  return (
    <div>
      {state[0]}
      <br />
      <button
        onClick={() => {
          // 여기서 작업한거는 메모리 주소를 변경한 것이 아니라
          // 메모리 주소에 연결되어 있는 값을 변경한 것이기 때문에
          // State에서는 값이 그대로 인것으로 인식하여 리렌더링이 발생하지 않는다.
            // state[0] = 1;
            // setState(state);
            // console.log(state);

          // 해결 방법 - 새로운 메모리 주소를 할당
            // setState([1]);
          //   [0]으로 설정해도 새로운 메모리 주소를 할당하기 때문에 리렌더링이 발생한다.
            // setState([0]);
            // console.log(state);

          //   다른 방법 - 전개 연산자 + 새로운 변수 할당
          state[0] = 1;
          //   메모리 값을 변경하면서, 변경되는 값은 제대로 전달하는 방법
          const copyArr = [...state];
          setState(copyArr);
          console.log(copyArr);
        }}
      >
        +1
      </button>
    </div>
  );
}
