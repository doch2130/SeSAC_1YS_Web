import logo from './logo.svg';
import './App.css';

function App() {
  const str = 'Hello, React World!';
  const test = 'test';
  const fontStyle = { backgroundColor: "orange" };

  function amazingJSX() {
    // return 'amazingJSX';
    alert('amazingJSX');
  }

  function printConsole() {
    console.log('콘솔 출력');
  }
  
  return (
    <div className="App">
      {/* 정의한 함수를 중간에 사용할 수 있다. */}
      {/* { amazingJSX() } */}

      {/* alert 함수도 실행 가능하며, alert 함수 실행 후 아래 코드가 실행된다. */}
      {/* { alert('amazingJSX') } */}

      {/* inport logo 이미지가 있어서 {logo}를 불러와서 사용할 수 있다. */}
      {/* <img src={logo} alt='로고' /> */}

      {/* 인라인 스타일 적용 시 {{}} 형식으로 감싸줘야 하며, 객체 형식으로 작성해야 한다. */}
      {/* <div className={test} style={{ fontSize: "32px" }}>인라인 스타일</div> */}

      {/* 위에서 style을 1차로 정의한 후 inline 스타일에 변수만 전달해서 사용할 수 있다. */}
      {/* <div style={ fontStyle }>인라인 스타일</div> */}

      {/* 함수를 바로 사용하면 이벤트가 바로 실행될 수 있으므로 익명 함수를 이용해서 사용하는 방법을 추천 */}
      {/* <span onClick={() => { alert('클릭!') }}>클릭</span> */}
      {/* <span onClick={ alert('클릭!') }>클릭</span> */}

      {/* 익명 함수로 내부에서 변수 설정 및 콘솔 로그 출력 등이 가능하다. */}
      {/* <span onClick={() => {
        let num = 10;
        num += 5;
        console.log(num);
      }}>클릭</span> */}

      {/* 함수의 경우 외부에서 정의 후 ()를 사용하지 않으면 바로 실행되지 않는다. */}
      {/* <span onClick={ printConsole }>클릭</span> */}

      {/* 함수의 경우 외부에서 정의 후 ()를 사용하면 바로 실행된다. */}
      {/* <span onClick={ printConsole() }>클릭</span> */}

      {/* StrictMode를 강제하기 때문에 에러가 발생하면 페이지에 에러 부분이 표시된다. */}
      {/* <span onClick={
        let num = 10;
        console.log(num);
      }>클릭</span> */}

      <span onClick={() => {
        let num = 10;
        console.log(num);
      }}>클릭</span>
    </div>
  );
}

export default App;
