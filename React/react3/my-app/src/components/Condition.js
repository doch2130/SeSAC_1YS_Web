import { useState } from 'react';

export default function Condition() {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <button onClick={() => setCondition(!condition)}>컨디션 변경!</button>
      <br />
      <span style={{ fontSize: '100px' }}>{condition ? '👍' : '😂'}</span>
    </div>
  );
}
