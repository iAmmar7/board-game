export const randomNumberFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomBool = (probability) => {
  const random = Math.random();
  if (probability === 'high') return random < 0.8;
  if (probability === 'low') return random < 0.3;
  return random < 0.5;
};

export const isFirstIndex = (rowIndex, colIndex) => {
  if (rowIndex === 0 && colIndex === 0) return true;
  return false;
};

export const generateRandomPositions = (rows, cols) => {
  const knightSet = new Set();
  const dangerSet = new Set();
  const collectableSet = new Set();

  // Knight position is fixed
  knightSet.add(`${0},${0}`);

  // Find the random index from row 1 and row 2
  const random = randomNumberFromRange(1, cols * 2 - 1);
  let firstIndex = -1;
  if (random > 5) firstIndex = [1, random % 6];
  else firstIndex = [0, random];

  // Add the danger on the intial random index
  dangerSet.add(`${firstIndex[0]},${firstIndex[1]}`);

  for (let row = firstIndex[0]; row < rows; row++) {
    let col = row === firstIndex[0] ? firstIndex[1] + 1 : 0;
    while (col < cols) {
      // The next danger should not be within the boundry of the earlier dangers
      const rightPos = `${row},${col + 1}`;
      const leftPos = `${row},${col - 1}`;
      const topPos = `${row - 1},${col}`;
      const downPos = `${row + 1},${col}`;
      const topLeftPos = `${row - 1},${col - 1}`;
      const topRightPos = `${row - 1},${col + 1}`;
      const downLeftPos = `${row + 1},${col - 1}`;
      const downRightPos = `${row + 1},${col + 1}`;

      if (
        !dangerSet.has(rightPos) &&
        !dangerSet.has(leftPos) &&
        !dangerSet.has(topPos) &&
        !dangerSet.has(downPos) &&
        !dangerSet.has(topLeftPos) &&
        !dangerSet.has(topRightPos) &&
        !dangerSet.has(downLeftPos) &&
        !dangerSet.has(downRightPos) &&
        randomBool()
      ) {
        dangerSet.add(`${row},${col}`);
      }
      col++;
    }
  }

  // Generate random indexes for collectables
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col === 0) continue;
      // Do not add collectables if danger already exists on this position
      if (!dangerSet.has(`${row},${col}`) && randomBool('low')) collectableSet.add(`${row},${col}`);
    }
  }

  return { knightSet, dangerSet, collectableSet };
};
