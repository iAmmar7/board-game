import { useCallback } from 'react';
import { useState, useMemo } from 'react';

import { BOARD_ROWS, BOARD_COLS } from '../utils/constants';
import { generateRandomPositions } from '../utils/helpers';
import useKnightNavigation from './useKnightNavigation';

function useBoard(gameStatus, handleGameStart, handlePlayerWon, handlePlayerFailed) {
  const [knightPosition, setKnightPosition] = useState([0, 0]);

  const { dangerSet, collectableSet } = useMemo(() => generateRandomPositions(BOARD_ROWS, BOARD_COLS), []);

  const handleSetKnightPosition = useCallback(
    (newRow, newCol) => {
      if (gameStatus) return;
      handleGameStart();
      if (collectableSet.has(`${newRow},${newCol}`)) {
        collectableSet.delete(`${newRow},${newCol}`);
        setKnightPosition([newRow, newCol]);
        if (collectableSet.size === 0) handlePlayerWon();
        return;
      }
      if (dangerSet.has(`${newRow},${newCol}`)) {
        setKnightPosition([newRow, newCol]);
        handlePlayerFailed();
        return;
      }
      setKnightPosition([newRow, newCol]);
    },
    [collectableSet, dangerSet, gameStatus, handleGameStart, handlePlayerFailed, handlePlayerWon],
  );

  useKnightNavigation(knightPosition, handleSetKnightPosition);

  return {
    knightPosition,
    dangerPositions: dangerSet,
    collectablePositions: collectableSet,
  };
}

export default useBoard;
