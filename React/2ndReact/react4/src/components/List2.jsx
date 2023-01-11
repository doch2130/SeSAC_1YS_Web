import React from 'react'
import ListChild2 from './ListChild2'
import Modal from './Modal'

export default function List2() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      content: "state 활용법 익히기"
    },
    {
      title: "코테 문제 풀기",
      content: "Lv 0 정복"
    }
  ]
  return (
    <div>
        <Modal />
        {/* 이렇게 1개씩 설정해서 데이터를 넘겨주는 방법이 있다. */}
        {/* <ListChild2 title={dataArr[0].title} content={dataArr[0].content} /> */}
        {/* <ListChild2 title={dataArr[1].title} content={dataArr[1].content} /> */}

        {/* 1개씩 일일이 설정을 해주면 효율적이지 못하기 때문에
        배열에서 사용할 수 있는 map 함수를 사용한다. */}
        {/* {dataArr.map((el) => {
          return <ListChild2 title={el.title} content={el.content} />
        })} */}
        {/* 코드에 return 1줄만 있는 경우에는 return + {} 생략 가능 [JavaScript 문법] */}
        {/* {dataArr.map((el) => <ListChild2 title={el.title} content={el.content} />)} */}

        {/* 위에 코드를 사용하면 콘솔 창에 빨간 메시지가 출력된다. */}
        {/* React에서 map으로 데이터를 출력할 때 Unique한 Key 값을 부여해야한다. */}
        {/* 전역에서는 필요가 없지만 같은 부모 내부에서는 구분이 필요하다. */}
        {/* 보통은 DB에서 받아온 데이터 중에서 Primary Key를 구분 값으로 같지만,
        Primary Key가 없는 경우에는 다른 구별이 가능한 값을 사용하고,
        최후의 수단으로 index 값을 사용한다. */}
        {/* {dataArr.map((el, index) => {
          return <ListChild2 title={el.title} content={el.content} key={index} />
        })} */}

        {dataArr.map((el, index) => {
          return (
            <div key={index}>
              <h2>{el.title}</h2>
              <p>{el.content}</p>
              <hr />
            </div>
          )
        })}
        <Modal />
    </div>
  )
}
