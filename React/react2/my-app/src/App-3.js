import logo from './logo.svg';
import './App.css';
// import MainHeader from './components/MainHeader';

function App() {

  // 컴포넌트를 함수 내부에도 정의 가능하지만 return이 여러 개로 보이고 가독성이 떨어져서 파일로 나눠서 사용한다.
  function MainHeader() {
    return (
      <h1>함수형 내부 정의</h1>
    )
  }
  
  return (
    <div className="App">
      <MainHeader />
    </div>
  );
}

export default App;
