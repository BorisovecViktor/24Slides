import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000)
    }

    return () => clearInterval(interval);
  }, [isActive, counter])

  const runTimer = () => {
    setIsActive(!isActive);
  }
  
  const resetTimer = () => {
    setIsActive(false);
    setSecond('00');
    setMinute('00');
    setCounter(0)
  }

  return (
    <div>
      <div>
        <span>{minute}</span>
        <span>-</span>
        <span>{second}</span>
      </div>
      <div>
        <button onClick={runTimer}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default Timer;
