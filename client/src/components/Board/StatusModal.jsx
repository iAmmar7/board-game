import React, { useState, useEffect } from 'react';
import { Typography, Modal } from 'antd';

function StatusModal(props) {
  const { status, handleRestart } = props;
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (!status) return;
    setVisibility(status);
  }, [status]);

  const handleClose = () => setVisibility(false);

  return (
    <Modal
      centered
      visible={visibility}
      footer={null}
      closable={false}
      mask={false}
      onCancel={handleClose}
      onOk={handleClose}
      afterClose={handleRestart}
      className='status-modal'
      bodyStyle={{
        backgroundColor: 'var(--color-primary)',
      }}
    >
      <Typography.Title level={1}>
        {status === 'won' && 'You Won'}
        {status === 'failed' && 'Game Over'}
      </Typography.Title>
    </Modal>
  );
}

export default StatusModal;
