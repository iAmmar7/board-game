import { useCallback, useState } from 'react';
import { message } from 'antd';

import { useGameClient } from '../http';

function useGameProgress(playerName, time, stopTimer) {
  const [gameStatus, setGameStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const { saveGame } = useGameClient();

  const handleWon = useCallback(() => {
    setGameStatus('won');
    stopTimer();
  }, [stopTimer, setGameStatus]);

  const handleFailed = useCallback(() => {
    setGameStatus('failed');
    stopTimer();
  }, [stopTimer, setGameStatus]);

  const handleResetStatus = useCallback(() => setGameStatus(null), []);

  const handleSaveGame = useCallback(async () => {
    setLoading(true);
    handleWon();
    const game = await saveGame({ name: playerName, score: time });
    if (game?.success) {
      message.success({ content: 'Result stored!', className: 'message' });
    } else {
      message.error({ content: 'Unable to store the result!', className: 'message' });
    }
    setLoading(false);
  }, [handleWon, playerName, saveGame, time]);

  return {
    gameStatus,
    isLoading: loading,
    canPlay: !loading && !gameStatus,
    handleWon,
    handleFailed,
    handleResetStatus,
    handleSaveGame,
  };
}

export default useGameProgress;
