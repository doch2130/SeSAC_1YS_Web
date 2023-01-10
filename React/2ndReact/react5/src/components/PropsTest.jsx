import React from 'react';

export default function PropsTest(props) {
  return (
    <div>
      <h2 style={{ color: props.foodStyle }}>{props.food}</h2>
    </div>
  );
}
