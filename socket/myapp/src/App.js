import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatting from './components/Chatting';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <Chatting />
    </div>
  );
}

export default App;
