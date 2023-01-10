import './App.css';
import PropsTest from './components/PropsTest';

function App() {
  return (
    <div className="App">
      <PropsTest food={'음식 전달'} foodStyle={'red'} />
      <PropsTest foodStyle={'red'} />
    </div>
  );
}
PropsTest.defaultProps = {
  food: '기본 값',
};

export default App;
