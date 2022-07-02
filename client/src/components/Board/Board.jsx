import React, { useState, useCallback } from 'react';
import { Row, Col } from 'antd';

import './Board.modules.css';
import { BOARD_COLS, BOARD_ROWS } from '../../utils/constants';
import { useBoard } from '../../hooks';
import Cell from './Cell';

function Board() {
  const [gameOver, setGameOver] = useState(false);

  const handleWon = useCallback(() => {
    console.log('won');
    setGameOver(true);
  }, []);

  const handleFailed = useCallback(() => {
    console.log('failed');
    setGameOver(true);
  }, []);

  const { knightPosition, dangerPositions, collectablePositions } = useBoard(gameOver, handleWon, handleFailed);

  const cellRenderer = useCallback(() => {
    return Array.from(new Array(BOARD_ROWS)).map((_, row) => {
      const col = Array.from(new Array(BOARD_COLS)).map((_, col) => {
        const knight = knightPosition[0] === row && knightPosition[1] === col;
        const danger = dangerPositions.has(`${row},${col}`);
        const collectable = collectablePositions.has(`${row},${col}`);
        return (
          <Col key={col} className='gutter-box'>
            <Cell row={row} col={col} knight={knight} danger={danger} collectable={collectable} />
          </Col>
        );
      });
      return <Row key={row}>{col}</Row>;
    });
  }, [collectablePositions, dangerPositions, knightPosition]);

  return <section className='board'>{cellRenderer()}</section>;
}

export default Board;
