import React, { useState, useCallback } from 'react';
import { Row, Col, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import './Board.modules.css';
import { BOARD_COLS, BOARD_ROWS } from '../../utils/constants';
import { useBoard, useTimer, useGameProgress } from '../../hooks';
import Cell from './Cell';
import StatusModal from './StatusModal';

function Board() {
  const [gameStatus, setGameStatus] = useState(null);
  const { time, handleStartTimer, handleStopTimer } = useTimer();
  const { handleWon, handleFailed } = useGameProgress(setGameStatus, handleStopTimer);
  const { knightPosition, dangerPositions, collectablePositions } = useBoard(
    gameStatus,
    handleStartTimer,
    handleWon,
    handleFailed,
  );

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

  return (
    <section className='board'>
      <div>
        <StatusModal status={gameStatus} />
        <Row className='description'>
          <Col>
            <Typography.Title level={4}>Player Name</Typography.Title>
          </Col>
          <Col>
            <Row className='timer'>
              <Col>
                <Typography.Title level={4}>{time}s</Typography.Title>
              </Col>
              <Col>
                <ClockCircleOutlined />
              </Col>
            </Row>
          </Col>
        </Row>
        {cellRenderer()}
      </div>
    </section>
  );
}

export default Board;
