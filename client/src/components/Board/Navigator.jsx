import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'antd';
import { LeftOutlined, UpOutlined, DownOutlined, RightOutlined } from '@ant-design/icons';

function Navigator(props) {
  const { moveLeft, moveRight, moveUp, moveDown } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) setIsMobile(true);
  }, []);

  if (!isMobile) return null;

  return (
    <div className='navigator'>
      <Row justify='center' align='center' gutter={10}>
        <Col>
          <Button size='large' icon={<LeftOutlined />} className='nav-btn horizontanl-btn' onClick={moveLeft} />
        </Col>
        <Col className='mid-btn-container'>
          <Button size='large' icon={<UpOutlined />} className='nav-btn vertical-btn' onClick={moveUp} />
          <Button size='large' icon={<DownOutlined />} className='nav-btn vertical-btn' onClick={moveDown} />
        </Col>
        <Col>
          <Button size='large' icon={<RightOutlined />} className='nav-btn horizontanl-btn' onClick={moveRight} />
        </Col>
      </Row>
    </div>
  );
}

export default Navigator;
