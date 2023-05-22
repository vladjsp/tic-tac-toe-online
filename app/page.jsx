'use client';

import { useState } from 'react';
import { GameTitle, GameInfo, GameField } from '../components/Game';
import { Header } from '../components/Header/Header';
import { useGameState } from '../hooks/useGameState';

const Home = () => {
  const [playersCount, setPlayersCount] = useState(4);
  const { cells, currentMove, handleCellClick, nextMove } = useGameState(playersCount);
  return (
    <div className='bg-slate-50 min-h-screen'>
      <main className='pt-6 mx-auto w-max'>
        <GameTitle playersCount={playersCount} />
        <GameInfo className='mt-4 ' currentMove={currentMove} playersCount={playersCount} />
        <GameField
          className='mt-6'
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          playersCount={playersCount}
        />
      </main>
    </div>
  );
};

export default Home;
