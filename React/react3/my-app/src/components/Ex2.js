import { useState } from 'react';

export default function Ex2() {
  const [good, setGood] = useState(0);

  return (
    <div>
      <button onClick={() => setGood(good + 1)}>
        {good <= 10 ? '👍' : '😁'}
      </button>
      <br />
      <span>{good}</span>
    </div>
  );
}
