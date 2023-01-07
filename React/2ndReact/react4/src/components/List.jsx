import React from 'react'
import Modal from './Modal'

export default function List() {
  return (
    <div>
        <h1>오늘 해야할 일</h1>
        <hr />
        <Modal />
        <h2>리액트 공부하기</h2>
        <p>state 활용법 익히기</p>
        <hr />
        <h2>코테 문제 풀기</h2>
        <p>Lv 0 정복 가즈아</p>
        <hr />
        <Modal />
    </div>
  )
}
