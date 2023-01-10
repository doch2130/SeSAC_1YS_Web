import './App.css';

function App() {
  const a = 8;
  const b = 4;
  return (
    <div className="App">
      <br />
      a의 값은 {a} 입니다.
      <br />
      b의 값은 {b} 입니다.
      <br />
      {a > b && <h1>a가 b보다 큽니다.</h1>}
      {a < b && <h1>a가 b보다 작습니다.</h1>}
    </div>
  );
}

export default App;
