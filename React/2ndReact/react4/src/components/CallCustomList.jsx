import React from 'react'
import CustomList from './CustomList';

export default function CallCustomList() {
    const nameArr = ["뽀로로", "루피", "크롱"];
    
  return (
    <div>
        <CustomList arr={nameArr} />

        {/* 데이터가 제대로 전달되지 않는 경우 */}
        {/* <CustomList/> */}
    </div>
  )
}
