import React, {useState, useEffect} from 'react';

import './style.css';

export function HooksUseEffectPart1() {

  // Using 'set'+property name is a convention:
  const [ count, setCount ] = useState(0);
  const [ color, setColor ] = useState("");

  // USE_EFFECT USAGE - PART 1:
  useEffect(() => {
    setColor(
      function _randomColor() {
        // Coolors collection array:
        const colors = [
          '#d7cdcc',
          '#ffffff', 
          '#59656f',
          '#9c528b',
          '#1d1e2c',
          '#ea7af4',
          '#b43e8f',
          '#6200b3',
          '#3b0086',
          '#290628'
        ];
        let randomIndex = Math.floor(Math.random() * 10);
        return colors[randomIndex];
      }
    )
  }, [count] );

  // PART 2
  // 'useEffect' can be used multiple times
  useEffect(
    () => {
      const intervalId = setInterval(() => {
        increment()
      }, 1500); 

      return () => {
        clearInterval(intervalId);
      }
    }
  )

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
      <h1 style={{color: color}}>{count}</h1>
      <button onClick={increment}>Increment!</button>
      <button onClick={decrement}>Decrement!</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </div>
  )
}
