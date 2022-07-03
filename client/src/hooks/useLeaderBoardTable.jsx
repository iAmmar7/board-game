import React, { useState, useRef, useMemo, useCallback } from 'react';
import { Button, Input, Space, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function useLeaderBoardTable() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = useCallback(
    (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div
          style={{
            padding: 8,
          }}
        >
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
              fontSize: '10px',
            }}
          />
          <Space>
            <Button
              type='primary'
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size='small'
              style={{
                fontSize: '10px',
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size='small'
              style={{
                fontSize: '10px',
              }}
            >
              Reset
            </Button>
            <Button
              type='link'
              size='small'
              onClick={() => {
                confirm({
                  closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              }}
              style={{
                fontSize: '10px',
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? 'var(--color-secondary)' : undefined,
          }}
        />
      ),
      onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) => text,
    }),
    [],
  );

  const columns = useMemo(
    () => [
      {
        title: (
          <Typography.Title level={5} className='column-title'>
            Name
          </Typography.Title>
        ),
        dataIndex: 'name',
        key: 'name',
        ...getColumnSearchProps('name'),
      },
      {
        title: (
          <Typography.Title level={5} className='column-title'>
            Score
          </Typography.Title>
        ),
        dataIndex: 'score',
        key: 'score',
        sorter: (a, b) => a.score > b.score,
        showSorterTooltip: false,
      },
    ],
    [getColumnSearchProps],
  );

  return { searchText, searchedColumn, columns };
}

export default useLeaderBoardTable;
