import { useCallback } from 'react';

function useGameProgress(setGameStatus, handleStopTimer) {
  const handleWon = useCallback(() => {
    console.log('won');
    setGameStatus('won');
    handleStopTimer();
  }, [handleStopTimer, setGameStatus]);

  const handleFailed = useCallback(() => {
    console.log('failed');
    setGameStatus('failed');
    handleStopTimer();
  }, [handleStopTimer, setGameStatus]);

  return { handleWon, handleFailed };
}

export default useGameProgress;
