import React, { useCallback } from 'react';
import { Row, Col, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import './Board.modules.css';
import { BOARD_COLS, BOARD_ROWS } from '../../utils/constants';
import { useBoard, useTimer, useGameProgress } from '../../hooks';
import Cell from './Cell';
import StatusModal from './StatusModal';

function Board() {
  const { time, startTimer, stopTimer, resetTimer } = useTimer();
  const { gameStatus, handleWon, handleFailed, handleResetStatus } = useGameProgress(stopTimer);
  const { knightPosition, dangerPositions, collectablePositions, handleResetPositions } = useBoard(
    gameStatus,
    startTimer,
    handleWon,
    handleFailed,
  );

  const handleRestart = () => {
    resetTimer();
    handleResetStatus();
    handleResetPositions();
  };

  const boardRenderer = useCallback(() => {
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
        <StatusModal status={gameStatus} handleRestart={handleRestart} />
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
        {boardRenderer()}
      </div>
    </section>
  );
}

export default Board;
