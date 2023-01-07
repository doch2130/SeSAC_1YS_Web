import React from 'react'

export default function CustomList(props) {
  return (
    <ul>
        {/* {props.arr.map((el) => <li key={el}>{el}</li> )} */}

        {/* 데이터가 제대로 전달되지 않은 경우 */}
        {/* ?를 추가해줌으로 써 props.arr의 데이터가 있는지 체크 */}
        {/* 데이터가 있으면 map 함수 실행 */}
        {/* 데이터가 없으면 map 함수 실행하지 않는다. */}
        {/* 많이 사용하는 것은 추천하지 않으며, 에러를 찾아서 수정하는 것이 제일 바람직하다. */}
        {props.arr?.map((el) => <li key={el}>{el}</li> )}
    </ul>
  )
}
