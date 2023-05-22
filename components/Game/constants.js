export const GAME_SYMBOLS = {
  ZERO: 'zero',
  CROSS: 'cross',
  TRIANGLE: 'triangle',
  SQUARE: 'square',
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const players = [
  {
    id: '1a',
    name: 'Curry',
    rating: 1240,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: '3c',
    name: 'Green',
    rating: 1134,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: '4d',
    name: 'Tompson',
    rating: 1232,
    symbol: GAME_SYMBOLS.SQUARE,
  },
  {
    id: '2b',
    name: 'Durant',
    rating: 1234,
    symbol: GAME_SYMBOLS.ZERO,
  },
];

export const SYMBOL_X = 'X';
export const SYMBOL_O = 'O';
