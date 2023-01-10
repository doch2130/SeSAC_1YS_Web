import './App.css';

function App() {
  const title = 'Hello World';
  return (
    <div className="App">
      <div className="test">{title}</div>
      <div>
        <label>아이디 : </label>
        <input className="input" type="text" />
        <br />
        <label>비밀번호 : </label>
        <input className="input" type="text" />
      </div>
    </div>
  );
}

export default App;
