import './App.css';
import TextProps from './components/TextProps';
import PropTypes from 'prop-types';

// prop-types가 리액트 15버전 이후부터는 따로 분리되었다고 한다.
// 설치 후 사용하면 된다.
// npm install --save prop-types

function App() {
  const text = 'App 컴포넌트에서 넘겨준 text props 입니다.';
  // const text = 123;
  const valid = '콘솔 띄우기 성공!';
  return (
    <div className="App">
      <TextProps text={text} valid={valid} />
      {/* <TextProps valid={valid} /> */}
    </div>
  );
}

TextProps.defaultProps = {
  text: '이건 기본 text props입니다.',
};

TextProps.propTypes = {
  text: PropTypes.string.isRequired,
  valid: PropTypes.string,
};

export default App;
