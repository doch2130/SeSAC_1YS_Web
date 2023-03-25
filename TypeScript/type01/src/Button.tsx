import { useState } from "react"

interface ButtonProps {
  onClick(): void,
  children: string,
}

interface User {
  name: string;
  age: number;
}

export default function Button(props:ButtonProps) {
  // useState에서 기본적으로 제네릭 형태로 값을 대입한다.
  // 여기서는 String 타입이 설정되어있다.
  const [name, setName] = useState('');

  // 다른 타입의 경우에는 list와 같이 설정해줘야 한다.
  // 문자 형태의 배열 타입이다.
  const [list, setList] = useState<string[]>([]);

  // User 인터페이스 형태의 배열 타입이다.
  const [list2, setList2] = useState<Array<User>>([]);

  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  )
}

