import './App.css';

function App() {
  const name = '난이';
  const animal = '믹스견';
  return (
    <div className="App">
      <br />
      <h2>
        제 반려 동물의 이름은{' '}
        <span style={{ textDecoration: 'underline' }}>{name}</span>입니다.
      </h2>
      <h2>
        <span style={{ textDecoration: 'underline' }}>{name}</span>는{' '}
        <span style={{ textDecoration: 'underline' }}>{animal}</span>
        입니다.
      </h2>
    </div>
  );
}

export default App;
