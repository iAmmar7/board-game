import React from 'react';
import { Row, Col, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function LeaderBoardHeader() {
  return (
    <Row>
      <Col>
        <Typography.Title level={2}>
          <Link to='/'>
            <ArrowLeftOutlined className='title-arrow' />
          </Link>
        </Typography.Title>
      </Col>
      <Col>
        <Typography.Title level={2} className='title-text'>
          Leader Board
        </Typography.Title>
      </Col>
    </Row>
  );
}

export default LeaderBoardHeader;
