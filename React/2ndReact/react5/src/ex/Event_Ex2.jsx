import React, { useState } from 'react';

export default function Event_Ex2() {

  const initList = [{
    name: '코디',
    email: 'codi@gmail.com'
  },
  {
    name: '윤소희',
    email: 'yoonsohee@gmail.com'
  }
];

  const [registerList, setRegisterList] = useState(initList);

  function Register() {
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

  function RegisterEnterEvent(e) {
    if (e.key === "Enter" || e.keyCode === "13") {
      Register();
    }
  }

  function DoubleClickRemove(deleteIndex) {
    setRegisterList(() => {
      const deleteFilter = registerList.filter((list) => {
        return list.name !== registerList[deleteIndex].name && list.email !== registerList[deleteIndex].email;
      });
      // console.log(deleteFilter);

      return [...deleteFilter];
    });

  }


  return (
    <div>
      <input type="text" placeholder="이름" id="name" />
      <input type="text" placeholder="이메일" id="email" onKeyDown={RegisterEnterEvent}/>
      <button onClick={() => Register()}>등록</button>
      <br />
      <div id="registerDiv">
        {registerList.map((el, index) => {
          return (
            <div key={index} onDoubleClick={() => {DoubleClickRemove(index)}}>
              <p>
                {el.name} : {el.email}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
