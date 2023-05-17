import clsx from 'clsx';
import { GameSymbol } from './GameSymbol';

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        'border border-gray-400 -ml-px -mt-px flex items-center justify-center',
        isWinner && 'bg-yellow-200'
      )}
      onClick={onClick}>
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
