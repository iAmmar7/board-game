import React from 'react';

import './Stats.modules.css';
import { LeaderBoard } from '../../components';

function StatsRoute() {
  return (
    <section className='stats-section'>
      <LeaderBoard />
    </section>
  );
}

export default StatsRoute;
