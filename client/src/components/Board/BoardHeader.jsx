import React from 'react';
import { Row, Col, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import PlayerName from './PlayerName';
import KnightImg from '../../img/knight.png';
import DangerImg from '../../img/danger.png';
import CollectableImg from '../../img/collectable.png';

function BoardHeader(props) {
  const { time, setPlayerName } = props;

  return (
    <div>
      <Row className='board-description'>
        <Col className='description-text-col'>
          <Typography.Paragraph className='description-text'>
            Use your Knight
            <span>
              <img src={KnightImg} alt='knight' />
            </span>
            to collect all the Collectables
            <span>
              <img src={CollectableImg} alt='collectable' />
            </span>
            by avoiding the Danger
            <span>
              <img src={DangerImg} alt='danger' />
            </span>
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row className='board-title'>
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
    </div>
  );
}

export default BoardHeader;
