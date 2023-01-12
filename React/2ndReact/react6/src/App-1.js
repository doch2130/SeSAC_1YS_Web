import './App.css';
import ChangeFocus from './components/ChangeFocus';
import RefDOM from './components/RefDOM';
import TestRef from './components/TestRef';

function App() {
  return (
    <div className="App">
      <TestRef />
      <hr />
      <ChangeFocus />
      <hr />
      <RefDOM />
    </div>
  );
}

export default App;
