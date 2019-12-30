import React, {useState} from 'react';

import './style.css';

export function HooksPart2() {

  // Using 'set'+property name is a convention:
  const [ count, setCount ] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function double() {
    setCount(prevCount => prevCount * 2);
  }
  
  function half() {
    if (count !== 0) {
      setCount(prevCount => {
        prevCount = -prevCount;
        let half = Math.round(prevCount / 2)
        return -half;
      })
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment!</button>
      <button onClick={decrement}>Decrement!</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </div>
  )
}
