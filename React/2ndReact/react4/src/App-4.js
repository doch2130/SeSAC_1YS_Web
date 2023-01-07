import './App.css';
import ExList from './components/ExList';

function App() {
  return (
    <div className="App">
      {/* <ExList /> */}

      {/* App => List => ListChild */}
      <hr />
      <hr />
      <ExList titleText="리액트 공부하기" contentText="state 사용법 익히기" />
    </div>
  );
}

export default App;
