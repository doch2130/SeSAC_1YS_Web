// 리듀서 통합 관리 파일
import { combineReducers } from 'redux';
import todo from './modules/todo';
import mbti from './modules/mbti';

export default combineReducers({
  todo,
  mbti,
});
