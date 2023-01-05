import { useState } from 'react';
import './App.css';

function App() {
  const [teacher, setTeacher] = useState('새싹');
  const [pororo, setPororo] = useState('뽀로로');

  return (
    <div className="App">
      <button onClick={() => setTeacher('tetz')}>영어로!</button>
      <br />
      <span>{teacher}</span>
      <br />
      <button onClick={() => setPororo('PORORO')}>영어로2!</button>
      <br />
      <span>{pororo}</span>
    </div>
  );
}

export default App;
