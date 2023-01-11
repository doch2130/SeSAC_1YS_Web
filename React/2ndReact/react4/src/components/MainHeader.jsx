import React from 'react'

// App.js에서 보내는 Props에서 text라는 객체를 받아서 사용한다.
// props = {
//     text: "Hello, props world!"
// }

// export default function MainHeader({text}) {

// 통으로 받아서 그냥 사용하는 방법
// export default function MainHeader(props) {

// 구조분해 할당으로 받는 방법 - 1
// export default function MainHeader({text, href, userID}) {

// 구조분해 할당으로 받는 방법 - 2
export default function MainHeader(props) {
    const { text, href, userID} = props;


    const obj = {
        str: "test",
        num: 10
    }
    // 구조분해를 이용해서 obj 객체 안에 있는 데이터를 각 변수에 저장한다.
    const {str, num} = obj;
    console.log('obj.str ', obj.str);
    console.log('obj.num ', obj.num);
    console.log('str ', str);
    console.log('num ', num);

  return (
    <>
        {/* <h1>{text}</h1> */}

        <div>
            {/* 통으로 받아서 그냥 사용하는 방법 */}
            {/* <h1>{props.userID} 님 반갑습니다.</h1> */}
            {/* <a href={props.href}>{props.text}</a> */}

            {/* 구조분해 할당으로 받는 방법 - 1, 2 */}
            <h1>{userID} 님 반갑습니다.</h1>
            <a href={href}>{text}</a>
        </div>
    </>
  )
}
