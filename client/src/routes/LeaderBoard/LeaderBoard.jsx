import React from 'react';

import { useGameResource } from '../../resources';

function LeaderBoard() {
  const { games, error, loading } = useGameResource();

  console.log('game', games, error, loading);

  return <div>LeaderBoard</div>;
}

export default LeaderBoard;
