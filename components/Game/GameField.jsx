'use client';

import clsx from 'clsx';

import { UiButton } from '../UI/uiButton';
import { GameSymbol } from './GameSymbol';

export function GameField({
  className,
  cells,
  currentMove,
  handleCellClick,
  nextMove,
  playersCount,
}) {
  const actions = (
    <>
      <UiButton size='md' variant='primary'>
        Draw
      </UiButton>
      <UiButton size='md' variant='outline'>
        Give up
      </UiButton>
    </>
  );

  return (
    <GameFiedLayout className={className}>
      <GameMoveInfo actions={actions} currentMove={currentMove} nextMove={nextMove} />
      <GameGrid>
        {cells.map((symbol, i) => (
          <GameCell
            key={i}
            onClick={() => {
              handleCellClick(i);
            }}>
            {symbol && <GameSymbol symbol={symbol} className='w-5 h-5' />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFiedLayout>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className='border border-slate-200 -ml-px -mt-px flex items-center justify-center'>
      {children}
    </button>
  );
}

function GameFiedLayout({ children, className }) {
  return (
    <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8  pt-5 pb-7')}>
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className='flex gap-3 items-center'>
      <div className='mr-auto'>
        <div className='flex items-center gap-1 text-xl leading-tight font-semibold'>
          Turn: <GameSymbol symbol={currentMove} className='w-5 h-5' />
        </div>
        <div className='flex items-center gap-1 text-xs leading-tight text-slate-400'>
          Next: <GameSymbol symbol={nextMove} className='w-3 h-3' />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className='grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3'>
      {children}
    </div>
  );
}
