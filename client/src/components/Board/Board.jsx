import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Button, Spin } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import './Board.modules.css';
import { BOARD_COLS, BOARD_ROWS } from '../../utils/constants';
import { useBoard, useTimer, useGameProgress } from '../../hooks';
import Cell from './Cell';
import StatusModal from './StatusModal';
import PlayerName from './PlayerName';

function Board() {
  const [playerName, setPlayerName] = useState();
  const { time, startTimer, stopTimer, resetTimer } = useTimer();
  const { gameStatus, isLoading, canPlay, handleFailed, handleResetStatus, handleSaveGame } = useGameProgress(
    playerName,
    time,
    stopTimer,
  );
  const { knightPosition, dangerPositions, collectablePositions, handleResetPositions } = useBoard(
    canPlay,
    startTimer,
    handleSaveGame,
    handleFailed,
  );

  const handleRestartGame = () => {
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
    <section className='board-section'>
      <div>
        <StatusModal status={gameStatus} handleRestart={handleRestartGame} />
        <Row className='description'>
          <Col>
            <PlayerName handleSetName={setPlayerName} />
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
        <div className='board'>
          {isLoading && (
            <div className='loader'>
              <Spin />
            </div>
          )}
          {boardRenderer()}
        </div>
        <Row className='button'>
          <Col>
            <Button type='primary'>
              <Link to='/leaderboard'>Leader Board</Link>
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Board;
