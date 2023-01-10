import './App.css';

function App() {
  const name = '난이';
  const animal = '믹스견';
  return (
    <div className="App">
      <br />
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}는 {animal}입니다.
      </h2>
    </div>
  );
}

export default App;
