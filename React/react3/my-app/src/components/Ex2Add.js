import { useState } from 'react';

// 문제 잘못이해하고 한거;;
// good이 10되면 good은 다시 0
// best는 1 증가

export default function Ex2Add() {
  const [good, setGood] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        👍
      </button>
      <button>😂</button>
      <br />
      <span>{good}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>{good === 10 ? setGood(0) || setBest(best + 1) : best}</span>
    </div>
  );
}
