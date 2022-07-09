import { useCallback, useEffect } from 'react';

import { BOARD_ROWS, BOARD_COLS } from '../utils/constants';

function useKnightNavigation(knightPosition, handleNewPosition) {
  const moveRight = useCallback(() => {
    if (knightPosition[1] === BOARD_COLS - 1) return;
    handleNewPosition(knightPosition[0], knightPosition[1] + 1);
  }, [handleNewPosition, knightPosition]);

  const moveLeft = useCallback(() => {
    if (knightPosition[1] === 0) return;
    handleNewPosition(knightPosition[0], knightPosition[1] - 1);
  }, [handleNewPosition, knightPosition]);

  const moveUp = useCallback(() => {
    if (knightPosition[0] === 0) return;
    handleNewPosition(knightPosition[0] - 1, knightPosition[1]);
  }, [handleNewPosition, knightPosition]);

  const moveDown = useCallback(() => {
    if (knightPosition[0] === BOARD_ROWS - 1) return;
    handleNewPosition(knightPosition[0] + 1, knightPosition[1]);
  }, [handleNewPosition, knightPosition]);

  const handleMoveKnight = useCallback(
    (event) => {
      if (event.code === 'ArrowRight') moveRight();
      if (event.code === 'ArrowLeft') moveLeft();
      if (event.code === 'ArrowUp') moveUp();
      if (event.code === 'ArrowDown') moveDown();
    },
    [moveDown, moveLeft, moveRight, moveUp],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleMoveKnight);

    return () => {
      document.removeEventListener('keydown', handleMoveKnight);
    };
  }, [handleMoveKnight]);

  return { moveRight, moveLeft, moveDown, moveUp };
}

export default useKnightNavigation;
