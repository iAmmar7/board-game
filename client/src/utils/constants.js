export const BOARD_ROWS = 6;
export const BOARD_COLS = 6;
export const API_BASE_PATH =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api'
    : 'https://board-game-atompoint.herokuapp.com/api';
