import React from 'react';

import KnightImg from '../../img/knight.png';
import DangerImg from '../../img/danger.png';
import CollectableImg from '../../img/collectable.png';

function Cell(props) {
  const { knight, danger, collectable } = props;

  return (
    <div className='cell'>
      {knight && <img src={KnightImg} alt='knight' />}
      {danger && <img src={DangerImg} alt='danger' />}
      {collectable && <img src={CollectableImg} alt='collectable' />}
    </div>
  );
}

export default Cell;
