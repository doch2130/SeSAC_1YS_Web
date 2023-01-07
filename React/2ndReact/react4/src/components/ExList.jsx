import React from 'react'
import ExListChild from './ExListChild'

// export default function ExList() {

// App => List => ListChild
export default function ExList({titleText, contentText}) {
  return (
    <div>
        <h1>오늘 해야할 일</h1>
        <hr />
        {/* <ExListChild titleText='리액트 공부하기' contentText='state 사용법 익히기'/> */}

        {/* App => List => ListChild */}
        <ExListChild titleText={titleText} contentText={contentText}/>
        <h2>코테 문제 풀기</h2>
        <p>Lv 0 정복 가즈아</p>
        <hr />
    </div>
  )
}
