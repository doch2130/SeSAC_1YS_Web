import React from 'react'
import congImg from '../ThankCong.jpg';

export default function Images() {
  return (
    <>
    {/* npx create-react-app 으로 만든 경우
    기본 값으로 public 폴더가 static 설정이 되어 있다. */}
      <img src='/images/ThankCong.jpg' alt='img' />
      <hr />
      {/* src 폴더 내부의 img 파일을 가져오는 경우 */}
      <img src={congImg} alt='img2' />
    </>
  )
}
