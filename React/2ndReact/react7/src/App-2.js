import './App.css';
import InlineCss from './components/InlineCss';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';

function App() {
  return (
    <div className="App">
      <h1>인라인</h1>
      <InlineCss />
      <hr />
      <h1>외부CSS</h1>
      <TestCss />
      <hr />
      <h1>Style components 라이브러리</h1>
      <TestStyled />
    </div>
  );
}

export default App;
