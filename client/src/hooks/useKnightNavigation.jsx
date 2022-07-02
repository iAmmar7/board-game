import { useState, useCallback, useEffect } from 'react';

import { BOARD_ROWS, BOARD_COLS } from '../utils/constants';

function useKnightNavigation() {
  const [knightPosition, setKnightPosition] = useState([0, 0]);

  const moveRight = useCallback(() => {
    if (knightPosition[1] === BOARD_COLS - 1) return;
    setKnightPosition((oldPostion) => [oldPostion[0], oldPostion[1] + 1]);
  }, [knightPosition]);

  const moveLeft = useCallback(() => {
    if (knightPosition[1] === 0) return;
    setKnightPosition((oldPostion) => [oldPostion[0], oldPostion[1] - 1]);
  }, [knightPosition]);

  const moveUp = useCallback(() => {
    if (knightPosition[0] === 0) return;
    setKnightPosition((oldPostion) => [oldPostion[0] - 1, oldPostion[1]]);
  }, [knightPosition]);

  const moveDown = useCallback(() => {
    if (knightPosition[0] === BOARD_ROWS - 1) return;
    setKnightPosition((oldPostion) => [oldPostion[0] + 1, oldPostion[1]]);
  }, [knightPosition]);

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

  return {
    knightPosition,
    handleMoveKnight,
  };
}

export default useKnightNavigation;
