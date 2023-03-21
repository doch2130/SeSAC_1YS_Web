import logo from './logo.svg';
import './App.css';

function App() {
  function amazingJSX() {
    return 'amazingJSX';
  }
  
  return (
    <div className="App">
      {/* alert 함수도 실행 가능하며, alert 함수 실행 후 아래 코드가 실행된다. */}
      { alert('amazingJSX') }
      {amazingJSX()}
    </div>
  );
}

export default App;