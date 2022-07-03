import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';

function BoardFooter() {
  return (
    <Row className='board-footer'>
      <Col>
        <Button type='primary'>
          <a href='https://github.com/iAmmar7/board-game' target='_blank' rel='noreferrer'>
            Project Repo
          </a>
        </Button>
      </Col>
      <Col>
        <Button type='primary' className='leaderboard-btn'>
          <Link to='/leaderboard'>Leader Board</Link>
        </Button>
      </Col>
    </Row>
  );
}

export default BoardFooter;
