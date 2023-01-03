import logo from './logo.svg';
import './App.css';

function App() {
  const divStyle = { marginTop: "32px", backgroundColor: "skyblue" };
  const helloStr = "Hello, first exercise";
  
  return (
    <div className="App">
      <div style={ divStyle } onClick={() => {
        alert('클릭 됨');
      }}>{ helloStr }</div>
    </div>
  );
}

export default App;
