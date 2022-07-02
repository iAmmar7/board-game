import { useCallback } from 'react';
import { useState, useEffect } from 'react';

function useTimer() {
  const [startTimer, setStartTimer] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleStartTimer = useCallback(() => {
    if (startTimer) return;
    setStartTimer(true);
  }, [startTimer]);

  const handleStopTimer = useCallback(() => {
    if (!startTimer) return;
    setStartTimer(false);
  }, [startTimer]);

  useEffect(() => {
    if (!startTimer) return;

    const interval = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimer, startTimer]);

  return { time: timer, handleStartTimer, handleStopTimer };
}

export default useTimer;
