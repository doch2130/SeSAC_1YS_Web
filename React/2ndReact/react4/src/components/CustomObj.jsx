import React from 'react'

export default function CustomObj(props) {
    // const { name, age, nickName } = props.obj;

    // return (
    //     <div>
    //         <h1>이름 : {name}</h1>
    //         <h2>나이 : {age}</h2>
    //         <h2>별명 : {nickName}</h2>
    //     </div>
    // )


    // 데이터가 제대로 전달되지 않은 경우 - if문 처리 방법
    if(props.obj) {
        const { name, age, nickName } = props.obj;

        return (
            <div>
                <h1>이름 : {name}</h1>
                <h2>나이 : {age}</h2>
                <h2>별명 : {nickName}</h2>
            </div>
          )
    } else {
        return (
            <div>데이터가 없습니다.</div>
        )
    }

}
