import React, { useState } from 'react';

export default function Event_Ex() {

  const initList = [{
    name: '코디',
    email: 'codi@gmail.com'
  },
  {
    name: '테스터',
    email: 'test@gmail.com'
  }
];

  const [registerList, setRegisterList] = useState(initList);

  function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const temp = {
      name: name,
      email: email,
    };

    setRegisterList(() => {
      return [...registerList, temp];
    });

  }

  // 선생님 답
  const [info, setInfo] = useState(initList);
  const [nameAdd, setNameAdd] = useState('');
  const [emailAdd, setEmailAdd] = useState('');

  return (
    <div>
      {/* <input type="text" placeholder="이름" id="name" /> */}
      {/* <input type="text" placeholder="이메일" id="email" /> */}
      {/* <button onClick={() => register()}>등록</button> */}
      {/* <br /> */}
      {/* <div id="registerDiv">
        {registerList.map((el, index) => {
          return (
            <div key={index}>
              <p>
                {el.name} : {el.email}
              </p>
            </div>
          );
        })}
      </div> */}

      {/* 선생님 답 */}
      {/* document.get 같은 방식으로 해도 되지만, React에서는 DOM에 직접적으로 접근하는 것을 권장하지는 않는다. */}
      <input type="text" placeholder="이름" id="name" onChange={(e) => {setNameAdd(e.target.value)}} value={nameAdd} />
      <input type="text" placeholder="이메일" id="email" onChange={(e) => {setEmailAdd(e.target.value)}} value={emailAdd}/>
      {/* concat 함수를 사용하면 배열의 제일 뒤에 삽입된다. */}
      <button onClick={() => {
        setInfo(info.concat({name: nameAdd, email: emailAdd}));
        setNameAdd('');
        setEmailAdd('');
        }}>등록</button>
      <br />
      <div>
        {info.map((el, index) => {
          return (
              <h2 key={index}>{el.name} : {el.email}</h2>
          );
        })}
      </div>
    </div>
  );
}
