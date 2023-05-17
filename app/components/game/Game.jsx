'use client';

import { GameCell } from './GameCell';
import { GameInfo } from './GameInfo';
import { useGameState } from '../../hooks/useGameState';
import ResetButton from './ResetButton';

export function Game() {
  const { cells, currentStep, winnerSymbol, isDraw, resetGame, toggleCell, getWinnerCell } =
    useGameState();

  return (
    <div className='flex flex-col items-center w-40 mx-auto my-24 border border-black p-5'>
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
      <div className='grid pl-px pt-px grid-cols-game-field grid-rows-game-field '>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <ResetButton onClick={resetGame} />
    </div>
  );
}
