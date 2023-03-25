import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, IDate } from '../global/global';

export default function CreateDate() {
  const dates:IDate[] = useSelector((state: RootState) => state.dates);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const history = useNavigate();

  function addDay() {
    if(inputRef.current === null) return false;

    const data = {
      id: dates.length + 1,
      date: inputRef.current.value
    }

    dispatch({type: 'DAY/WRITE', payload: data});
    history(`/`);
  }
  return (
    <div>
      <h3>현재 일수 : {dates.length}일</h3>
      {/* <input type="text" ref={inputRef} placeholder="0000-00-00"/> */}
      <input type="date" ref={inputRef} placeholder="0000-00-00"/>
      <button onClick={addDay}>날짜 추가</button>
    </div>
  );
}
