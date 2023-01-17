import './App.css';
import FancyBorder from './components/FancyBorder';
import TestCss from './components/TestCss';

function App() {
  return (
    <div className="App">
      <FancyBorder color="red">
        {/* <h1>Hello props.children</h1> */}
        {/* <span>이건 유용합니다.</span> */}
        <TestCss />
      </FancyBorder>
    </div>
  );
}

export default App;
