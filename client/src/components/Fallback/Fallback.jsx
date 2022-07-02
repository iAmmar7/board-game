import React from 'react';
import { Space, Spin } from 'antd';

function Fallback() {
  return (
    <Space align='center' style={{ height: '100vh', width: '100%', justifyContent: 'center' }}>
      <Spin size='large' />
    </Space>
  );
}

export default Fallback;
