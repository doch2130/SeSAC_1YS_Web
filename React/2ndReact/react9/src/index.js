import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// createStore 문법이 오래되어 기능이 동일한 신규 문법인 configureStore로 작성한다.
import rootReducer from './store';

// Chrome에서 state를 확인할 수 있는 크롬 확장도구이다.
// 기본 코드에 reduxDevTool을 작성해주고 store에 2번째 인자값에 넣어줘야 정상 작동한다.
// 코드를 추가 안해도 정상작동한다.
// const reduxDevTool =
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = configureStore({ reducer: rootReducer }, reduxDevTool);
const store = configureStore({ reducer: rootReducer });

// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

// store => modules의 파일을 기본 문법만 먼저 작성
// store/index 파일에서 combieReducers 로 store 결합
// 최상단 index.js에서 store 생성 및 Provider 설정
// 컴포넌트 생성
// 컴포넌트의 요청에 따른 store/modules 작성
