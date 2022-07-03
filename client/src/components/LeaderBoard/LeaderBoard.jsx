import React from 'react';
import { message } from 'antd';

import './LeaderBoard.modules.css';
import { useGameResource } from '../../resources';
import Header from './Header';
import Table from './Table';

function LeaderBoard() {
  const { games, error, loading } = useGameResource();

  if (error) {
    message.error('Unable to fetch the leader boards!');
  }

  return (
    <div className='container'>
      <Header />
      <Table data={games?.games} loading={loading} />
    </div>
  );
}

export default LeaderBoard;
