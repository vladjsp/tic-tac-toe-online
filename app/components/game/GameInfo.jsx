import { GameSymbol } from './GameSymbol';

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className='mb-10'>Draw</div>;
  }

  if (winnerSymbol) {
    return (
      <div className='mb-10'>
        Winner: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className='mb-10'>
      Turn: <GameSymbol symbol={currentStep} />
    </div>
  );
}
