import React, { useState, useCallback } from 'react';
import { Row, Col } from 'antd';

import './Board.modules.css';
import { BOARD_COLS, BOARD_ROWS } from '../../utils/constants';
import { useKnightNavigation, useBoard } from '../../hooks';
import Cell from './Cell';

function Board() {
  const { knightPosition } = useKnightNavigation();
  const { dangerSet, collectableSet: randomCollectables } = useBoard();
  const [collectableSet, setCollectableSet] = useState(randomCollectables);

  const cellRenderer = useCallback(() => {
    return Array.from(new Array(BOARD_ROWS)).map((_, row) => {
      const col = Array.from(new Array(BOARD_COLS)).map((_, col) => {
        const knight = knightPosition[0] === row && knightPosition[1] === col;
        const danger = dangerSet.has(`${row},${col}`);
        const collectable = collectableSet.has(`${row},${col}`);
        return (
          <Col key={col} className='gutter-box'>
            <Cell row={row} col={col} knight={knight} danger={danger} collectable={collectable} />
          </Col>
        );
      });
      return <Row key={row}>{col}</Row>;
    });
  }, [collectableSet, dangerSet, knightPosition]);

  return <section className='board'>{cellRenderer()}</section>;
}

export default Board;
