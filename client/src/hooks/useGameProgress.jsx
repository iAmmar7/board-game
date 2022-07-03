import { useCallback, useState } from 'react';

function useGameProgress(stopTimer) {
  const [gameStatus, setGameStatus] = useState(null);

  const handleWon = useCallback(() => {
    setGameStatus('won');
    stopTimer();
  }, [stopTimer, setGameStatus]);

  const handleFailed = useCallback(() => {
    setGameStatus('failed');
    stopTimer();
  }, [stopTimer, setGameStatus]);

  const handleResetStatus = useCallback(() => setGameStatus(null), []);

  return { gameStatus, handleWon, handleFailed, handleResetStatus };
}

export default useGameProgress;
