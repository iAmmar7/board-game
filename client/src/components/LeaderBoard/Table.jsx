import React from 'react';
import { Table } from 'antd';

import { useLeaderBoardTable } from '../../hooks';

function LeaderBoardTable(props) {
  const { data, loading } = props;
  const { columns } = useLeaderBoardTable();

  return (
    <div className='table-container'>
      <Table columns={columns} dataSource={data} loading={loading} rowKey='_id' pagination={{ defaultPageSize: 10 }} />
    </div>
  );
}

export default LeaderBoardTable;
