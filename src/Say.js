import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('first');
  const onClickEnter = () => setMessage('hi');
  const onClickLeave = () => setMessage('bye');

  const [color, changeColor] = useState('blue');
  return (
    <div>
      <button onClick={onClickEnter}>come in</button>
      <button onClick={onClickLeave}>come out</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => changeColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => changeColor('green')}>
        초록색
      </button>
      <button style={{ color: 'black' }} onClick={() => changeColor('black')}>
        검정색
      </button>
    </div>
  );
};

export default Say;
