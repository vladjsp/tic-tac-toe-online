import { GameTitle, GameInfo, GameField } from '../components/Game';
import { Header } from '../components/Header/Header';

const Home = () => {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <main className='pt-6 mx-auto w-max'>
        <GameTitle />
        <GameInfo className='mt-4 ' />
        <GameField className='mt-6' />
      </main>
    </div>
  );
};

export default Home;
