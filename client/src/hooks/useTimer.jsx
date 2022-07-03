import { useCallback } from 'react';
import { useState, useEffect } from 'react';

function useTimer() {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!timerStarted) return;

    const interval = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimer, timerStarted]);

  const startTimer = useCallback(() => {
    if (timerStarted) return;
    setTimerStarted(true);
  }, [timerStarted]);

  const stopTimer = useCallback(() => {
    if (!timerStarted) return;
    setTimerStarted(false);
  }, [timerStarted]);

  const resetTimer = useCallback(() => {
    setTimer(0);
    setTimerStarted(false);
  }, []);

  return { time: timer, startTimer, stopTimer, resetTimer };
}

export default useTimer;
