import React from 'react';

import KnightImg from '../../img/knight.png';

function Cell(props) {
  const { rowIndex, colIndex, knightPosition } = props;

  const isCurrentIndexForKnight = knightPosition[0] === rowIndex && knightPosition[1] === colIndex;

  return <div className='cell'>{isCurrentIndexForKnight && <img src={KnightImg} alt='knight' />}</div>;
}

export default Cell;
