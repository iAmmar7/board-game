import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { nanoid } from 'nanoid';

const preSelectName = localStorage.getItem('playerName') ?? `player-${nanoid(5)}`;

function PlayerName(props) {
  const [name, setName] = useState(preSelectName);
  const { handleSetName } = props;

  useEffect(() => {
    handleSetName(name);
  }, [name, handleSetName]);

  const handleChange = (newName) => {
    localStorage.setItem('playerName', newName);
    setName(newName);
  };

  return (
    <Typography.Title
      level={5}
      editable={{ onChange: handleChange }}
      style={{
        margin: 0,
      }}
    >
      {name}
    </Typography.Title>
  );
}

export default PlayerName;
