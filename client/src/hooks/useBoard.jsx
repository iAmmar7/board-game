import { useMemo } from 'react';

import { BOARD_ROWS, BOARD_COLS } from '../utils/constants';
import { generateRandomPositions } from '../utils/helpers';

function useBoard() {
  const { knightSet, dangerSet, collectableSet } = useMemo(() => generateRandomPositions(BOARD_ROWS, BOARD_COLS), []);

  return {
    knightSet,
    dangerSet,
    collectableSet,
  };
}

export default useBoard;
