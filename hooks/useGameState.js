'use client';

import { useState } from 'react';
import { GAME_SYMBOLS, MOVE_ORDER } from '../components/Game/constants';

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function useGameState() {
  const [gameState, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));
  const { cells, currentMove } = gameState;

  const nextMove = getNextMove(currentMove);

  const handleCellClick = (i) => {
    setGameState((prevGameState) => {
      if (prevGameState.cells[i]) {
        return prevGameState;
      }
      return {
        ...prevGameState,
        currentMove: getNextMove(prevGameState.currentMove),
        cells: prevGameState.cells.map((cell, index) =>
          index === i ? prevGameState.currentMove : cell
        ),
      };
    });
  };

  return { cells, nextMove, currentMove, handleCellClick };
}

// import { useState } from 'react';
// import { SYMBOL_O, SYMBOL_X } from '../components/Game/constants';

// const computeWinner = (cells) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
//       return [a, b, c];
//     }
//   }
// };

// export function useGameState() {
//   const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null]);
//   const [currentStep, setCurrentStep] = useState(SYMBOL_O);
//   const [winnerSequence, setWinnerSequence] = useState();

//   const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
//   const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;
//   const getWinnerCell = (index) => winnerSequence?.includes(index);

//   const toggleCell = (index) => {
//     if (cells[index] || winnerSequence) {
//       return;
//     }
//     const cellsCopy = cells.slice();
//     cellsCopy[index] = currentStep;
//     const winner = computeWinner(cellsCopy);

//     setCells(cellsCopy);
//     setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
//     setWinnerSequence(winner);
//   };

//   const resetGame = () => {
//     setCells(Array.from({ length: 9 }, () => null));
//     setCurrentStep(SYMBOL_X);
//     setWinnerSequence(undefined);
//   };

//   return {
//     cells,
//     currentStep,
//     winnerSymbol,
//     isDraw,
//     toggleCell,
//     resetGame,
//     getWinnerCell,
//   };
// }
