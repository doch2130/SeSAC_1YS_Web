import React, { useState } from 'react'

export default function Ex3ChangeObj(props) {
    const [obj, setObjChange] = useState(props.objArr[0]);
    const [index, setIndexChange] = useState(1);

    const [num, setNumChange] = useState(0);


    // 선생님 답
    const [index2, setIndex2] = useState(0);
    const obj2 = props.objArr[index2];

    function changeProfile() {
        if(index2 === props.objArr.length-1) {
            setIndex2(0);
        } else {
            setIndex2(index2+1);
        }
    }

  return (
    <div>
        <h1>이름 : {obj.name}</h1>
        <h2>나이 : {obj.age}</h2>
        <h2>별명 : {obj.nickName}</h2>
        <br />
        <button onClick={() => {
            if(obj.name === '크롱이') {
                setObjChange(props.objArr[0]);
            } else if(obj.name === '루피') {
                setObjChange(props.objArr[2]);
            } else {
                setObjChange(props.objArr[1]);
            }
        }}>프로필 변경</button>

        <hr />
        <button onClick={() => {
            if(index < props.objArr.length-1) {
                setIndexChange(index+1);
            } else {
                setIndexChange(0);
            }
            setObjChange(props.objArr[index]);
        }}>프로필 변경2</button>

        <hr />
        <hr />
        <hr />

        <h1>이름 : {props.objArr[num].name}</h1>
        <h2>나이 : {props.objArr[num].age}</h2>
        <h2>별명 : {props.objArr[num].nickName}</h2>
        <button onClick={() => {
            if(num < props.objArr.length-1) {
                setNumChange(num+1);
            } else {
                setNumChange(0);
            }
        }}>프로필 변경3</button>


        <hr />
        <hr />
        <hr />
        <h1>선생님 답</h1>
        <h1>이름 : {obj2.name}</h1>
        <h2>이름 : {obj2.age}</h2>
        <h2>별명 : {obj2.nickName}</h2>
        <button onClick={changeProfile}>프로필 변경4</button>
    </div>
  )
}
