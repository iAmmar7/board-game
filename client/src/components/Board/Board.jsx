import React, { useCallback, useMemo } from 'react';
import { Row, Col } from 'antd';

import './Board.modules.css';
import { BOARD_ROWS, BOARD_COLS } from '../../utils/constants';
import { randomNumberFromRange } from '../../utils/helpers';
import { useKnightNavigation } from '../../hooks';
import Cell from './Cell';

function Board() {
  const { knightPosition } = useKnightNavigation();

  const dangerStartIndex = useMemo(() => {
    const random = randomNumberFromRange(1, 11);
    if (random > 5) return [1, random % 6];
    return [0, random];
  }, []);

  const cellRenderer = useCallback(() => {
    return Array.from(new Array(BOARD_ROWS)).map((row, rowIndex) => {
      const col = Array.from(new Array(BOARD_COLS)).map((col, colIndex) => {
        return (
          <Col key={colIndex} className='gutter-box'>
            <Cell rowIndex={rowIndex} colIndex={colIndex} knightPosition={knightPosition} />
          </Col>
        );
      });
      return <Row key={rowIndex}>{col}</Row>;
    });
  }, [knightPosition]);

  return <section className='board'>{cellRenderer()}</section>;
}

export default Board;
