import { GAME_SYMBOLS } from './constants';

import { CrossIcon } from './icons/CrossIcon';
import { SquareIcon } from './icons/SquareIcon';
import { TringleIcon } from './icons/TriangleIcon';
import { ZeroIcon } from './icons/ZeroIcon';

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
      [GAME_SYMBOLS.TRIANGLE]: TringleIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
