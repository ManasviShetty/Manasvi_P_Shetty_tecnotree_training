import React, { useState, useEffect } from 'react';

const Countdowntimer = ({ initialSeconds }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);

  useEffect(() => {
    if (secondsRemaining > 0) {
      const intervalId = setInterval(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [secondsRemaining]);

  const startTimer = () => {
    setSecondsRemaining(initialSeconds);
  };

  const stopTimer = () => {
    setSecondsRemaining(0);
  };

  return (
    <div>
      <h1>{secondsRemaining}</h1>
      {secondsRemaining === 0 && <p>your time starts now!!</p>}
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Countdowntimer;
