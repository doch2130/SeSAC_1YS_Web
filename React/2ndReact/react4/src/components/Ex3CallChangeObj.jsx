import React from 'react'
import Ex3ChangeObj from './Ex3ChangeObj'

export default function Ex3CallChangeObj() {
    const pororoObjArr = [
        {
            name: "뽀로로",
            age: "5",
            nickName: "사고뭉치",
        },
        {
            name: "루피",
            age: "4",
            nickName: "공주님",
        },
        {
            name: "크롱이",
            age: "5",
            nickName: "장난꾸러기",
        }
    ];

    return (
        <div className="App">
            <Ex3ChangeObj objArr={pororoObjArr} />
        </div>
    );
}
