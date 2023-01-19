import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

export default function TodoList() {
  // combineReducers 함수를 이용해서 state를 합치는 작업을 했기 때문에
  // useSelector 함수로 불러올 때 state 에는 todo, 그외 다른 store들의 집합체이다.
  // 그래서 필요한 state.todo 까지 접근 후 todo 안에 있는 list 키 값에 접근을 해야하기 때문에
  // state.todo.list 로 접근을 하면 된다.
  // const list = useSelector((state) => state.todo.list);
  
  // 기본 todo.list에서 filter() 함수를 이용해서 특정 값만 가져온다.
  const list = useSelector((state) => state.todo.list).filter((el) => el.done === false);
  // const todoList = list.filter((el) => el.done === false);
  const inputRef = useRef();

  const nextxID = useSelector((state) => state.todo.nextID);

  const dispatch = useDispatch();

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={() => {
          dispatch(create({id: nextxID, text: inputRef.current.value}));
          inputRef.current.value = '';
        }}
        >추가</button>
      </div>
      <ul>
        {list.map((el) => {
          return <li key={el.id}>{el.text} <button onClick={() => {
            dispatch(done(el.id));
          }}>완료</button></li>
        })}
      </ul>
    </section>
  )
}
