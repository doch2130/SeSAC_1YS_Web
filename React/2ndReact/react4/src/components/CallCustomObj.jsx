import React from 'react'
import CustomObj from './CustomObj'

export default function CallCustomObj() {
    const pororoObj = {
        name: '뽀로로',
        age: 5,
        nickName: '사고뭉치'
    }
  return (
    <div>
        <CustomObj obj={pororoObj} />

        {/* 데이터가 제대로 전달되지 않은 경우 */}
        {/* <CustomObj /> */}
    </div>
  )
}
