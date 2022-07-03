import React, { useState, useEffect } from 'react';
import { Typography, Modal } from 'antd';

function StatusModal(props) {
  const { status } = props;
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
