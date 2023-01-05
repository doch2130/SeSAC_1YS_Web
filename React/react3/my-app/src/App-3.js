import { useState } from 'react';
import './App.css';

function App() {
  // let [teacher, setTeacher] = useState('새싹');
  const [teacher, setTeacher] = useState('새싹');

  // function customSetTeacher(name) {
  //   // teacher = name;
  //   setTeacher(name);
  //   console.log(teacher);
  // }

  function customSetTeacher() {
    // teacher = name;
    setTeacher('tetz');
    console.log(teacher);
  }

  return (
    <div className="App">
      {/* <button onClick={() => customSetTeacher('tetz')}>영어로!</button> */}

      {/* 함수 정의를 안하고 바로 사용하면 React 렌더가 계속해서 일어나기 때문에 Error가 발생한다. */}
      {/* <button onClick={setTeacher('tetz')}>영어로!</button> */}

      {/* 인자 값을 받지 않고 함수에 ()를 작성하지 않으면 함수가 실행되지 않아서 Error가 발생하지는 않지만, 추천하지 않는 방법입니다. */}
      <button onClick={customSetTeacher}>영어로!</button>
      <br />
      <span>{teacher}</span>
    </div>
  );
}

export default App;
