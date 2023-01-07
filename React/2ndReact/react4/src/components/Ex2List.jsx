import React from 'react'
import Ex2ListChild from './Ex2ListChild';

export default function Ex2List() {
    const items = [
        {
            item: "PS5",
            price: "685,000원"
        },
        {
            item: "에어 프라이어",
            price: "50,000원"
        },
        {
            item: "사세 치킨윙",
            price: "11,500원"
        }
    ];

  return (
    <div>
        {/* 이 상황에서 index key 값이 중복 사용이 되는데
        이렇게 사용이 되면 나중에 이벤트가 어디로 가야하는지에 대한 문제가 생길 수 있으니 주의해야한다. */}
        {items.map((el, index) => <Ex2ListChild item={el.item} price={el.price} key={index}/>)}

        <hr />
        <hr />
        {items.map((el, index) => {
            return (
                <div key={index}>
                    <h1>품목명 : {el.item}</h1>
                    <p>가격 : {el.price}</p>
                    <hr />
                </div>
            )
        })}

    </div>
  )
}
