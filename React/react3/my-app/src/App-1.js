// import logo from './logo.svg';
import './App.css';

function App() {
  // 이렇게 사용하면 React의 의미가 없다!~

  // let teacher = '새싹';
  const teacher = '새싹';

  function inEnglish() {
    const spanEl = document.querySelector('.App > span');
    spanEl.innerHTML = 'tetz';
    // teacher = 'tetz';
    // console.log(teacher);
  }

  return (
    <div className="App">
      <button onClick={() => inEnglish()}>영어로!</button>
      <br />
      <span>{teacher}</span>
    </div>
  );
}

export default App;
