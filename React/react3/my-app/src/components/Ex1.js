import { useState } from 'react';

function Ex1() {
  const [count, setCount] = useState(1);

  return (
    <>
      <span>{count}</span>
      <br />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Ex1;
