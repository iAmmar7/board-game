import React, { useCallback, useState } from 'react';
import { Row, Col, Spin } from 'antd';

import './Board.modules.css';
import { BOARD_COLS, BOARD_ROWS } from '../../utils/constants';
import { useBoard, useTimer, useGameProgress, useKnightNavigation } from '../../hooks';
import Cell from './Cell';
import StatusModal from './StatusModal';
import BoardHeader from './BoardHeader';
import BoardFooter from './BoardFooter';
import Navigator from './Navigator';

function Board() {
  const [playerName, setPlayerName] = useState();
  const { time, startTimer, stopTimer, resetTimer } = useTimer();
  const { gameStatus, isLoading, canPlay, handleFailed, handleResetStatus, handleSaveGame } = useGameProgress(
    playerName,
    time,
    stopTimer,
  );
  const { knightPosition, dangerPositions, collectablePositions, handleResetPositions, handleSetKnightPosition } =
    useBoard(canPlay, startTimer, handleSaveGame, handleFailed);
  const { moveLeft, moveRight, moveUp, moveDown } = useKnightNavigation(knightPosition, handleSetKnightPosition);

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
        <BoardHeader setPlayerName={setPlayerName} time={time} />
        <div className='board'>
          {isLoading && (
            <div className='loader'>
              <Spin size='large' />
            </div>
          )}
          {boardRenderer()}
        </div>
        <BoardFooter />
        <Navigator moveLeft={moveLeft} moveRight={moveRight} moveUp={moveUp} moveDown={moveDown} />
      </div>
    </section>
  );
}

export default Board;
