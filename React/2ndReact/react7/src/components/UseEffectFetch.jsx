import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
// axios 모듈 설치 - npm install axios
import ProfileComponents from './ProfileComponents';

export default function UseEffectFetch() {
  // 배열로 값을 받을 예정이므로 초기 값을 빈 배열로 설정
    const [dataArr, setDataArr] = useState([]);

    async function fetchData() {
      const resFetch = await axios.get('http://localhost:4000');

      // 코드 가독성을 위해서 === 200 대신에 !== 200을 사용함으로써 예외처리까지 한번에 처리한다.
      if(resFetch.status !== 200) return alert('통신 에러');

      // dataArr에 data 값을 넣으면 리렌더링이 발생하지 않아서
      // setDataArr() 함수를 이용하여 데이터를 넣어준다.
      const data = resFetch.data;
      setDataArr(data);
      console.log(data);
    }

    // 코드 실행 시 상단의 js 코드 실행 후, 컴포넌트의 return이 실행된다.
    // 그리고 마지막에 useEffect()가 실행된다.
    // 마운트 시에만 실행할 예정이므로, [] 값 설정
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div>
      {dataArr.map((el, index) => {
        return <ProfileComponents key={index} name={el.name} age={el.age} nickName={el.nickName} />
      })}
    </div>
  )
}
