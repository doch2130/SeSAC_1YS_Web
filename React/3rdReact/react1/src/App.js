import { useState } from "react";
import Contact from "./Contact";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default function App() {
  let a = 1;
  let b = 2;
  a = b;
  console.log(a);

  let c = [1,2,3];
  let d = c;
  d.push(4);
  console.log('c', c);
  console.log('d', d);
  // d에 c의 메모리 주소 값이 저장이 된다.
  // d.push() 명령어를 실행하면 d와 c의 실제 값은 동일하게 가지고 있기 때문에
  // d 뿐만 아니라, c에도 4의 값이 들어가게 된다.
  let f = [...c];
  f.push(5);
  console.log('c2', c);
  console.log('f', f);

  function reducer(state = [], action) {
    if (action.type === 'ADD') {
      // 전개 연산자를 이용해서 state에 저장되어 있는 값을 새로운 배열로 다시 만드는 과정을 한다.
      // push를 사용하고 싶으면 Object 함수를 사용한다.
      // state의 값을 새로운 배열로 생성해서 newState에 저장한다.
      // let newState = Object.assign(state);
      // newState.push(action.payload);
      
      return [...state, action.payload];
    }
    return state;
  }
  const store = createStore(reducer);
  const [list,setList] = useState([]);
    return <>
    <Provider store={store}>
      현재 개수 : { list.length }
      <br />
      <Contact />
    </Provider>
    </>
}