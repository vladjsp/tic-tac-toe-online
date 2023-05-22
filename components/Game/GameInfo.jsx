'use client';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { GAME_SYMBOLS, players } from './constants';
import { Profile } from '../Profile';
import { GameSymbol } from './GameSymbol';

export function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={clsx(
        className,
        'bg-white rounded-2xl shadow-md px-8 py-4 grid  grid-cols-2 gap-1 justify-between'
      )}>
      {players.slice(0, playersCount).map((player) => (
        <PlayerInfo key={player.id} playerInfo={player} isTimerOn={currentMove === player.symbol} />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isTimerOn }) {
  const [seconds, setSecond] = useState(30);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  const isDanger = seconds <= 10;

  useEffect(() => {
    if (isTimerOn) {
      const interval = setInterval(() => {
        setSecond((prev) => Math.max(prev - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSecond(30);
      };
    }
  }, [isTimerOn]);

  const getTimerColor = () => {
    if (isTimerOn) {
      return isDanger ? 'text-orange-600' : 'text-slate-600';
    }
    return 'text-slate-300';
  };

  return (
    <div className='flex gap-3 items-center'>
      <div className='h-6 w-px bg-slate-200' />
      <div className='relative'>
        <Profile
          className='w-44'
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className='w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center'>
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx('text-lg font-semibold w-[60px]', getTimerColor())}>
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
