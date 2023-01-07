import './App.css';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      {/* Props에서 text라는 객체로 전달 */}
      {/* <MainHeader text="Hello, props world!" /> */}

      {/* 같은 Component를 불러와도 props를 다르게 전달하여 다른 메시지를 출력할 수 있게 한다. */}
      {/* <MainHeader text="Bye Bye, props world!" /> */}
      {/* <MainHeader text="Well come back, props world!" /> */}

      {/* props를 전달할 때 1개만 보내는 것이 아니라 여러 가지 데이터를 보낼 수 있다. */}
      <MainHeader text="Go naver" href="https://naver.com" userID="sesac" />
    </div>
  );
}

export default App;
