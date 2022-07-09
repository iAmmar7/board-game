import React from 'react';

import { Board } from '../../components';
import './Game.modules.css';

function GameRoute() {
  return (
    <section className='game-section'>
      <Board />
    </section>
  );
}

export default GameRoute;
