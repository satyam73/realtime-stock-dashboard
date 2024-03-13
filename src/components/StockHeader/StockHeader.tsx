import { CURRENCY_SYMBOL_MAPPER } from '@/src/constants';
import { StockHeaderProps } from './stockHeader.types';
import { MoveDown, MoveUp } from 'lucide-react';

function StockHeader({
  stockName,
  currency,
  currentPrice,
  previousClosing,
  date,
}: StockHeaderProps) {
  const currencySymbol: string =
    CURRENCY_SYMBOL_MAPPER[currency] || 'Unknown currency';
  const gainOrLossToday: number = Number(
    (currentPrice - previousClosing).toFixed(2)
  );
  const isPriceUp: boolean = gainOrLossToday > 0;

  const priceBackgroundColor: string = isPriceUp
    ? 'bg-green-100'
    : 'bg-red-100';
  const priceTextColor: string = isPriceUp ? 'text-green-700' : 'text-red-700';

  // Gains of day = current price - previous closing

  // Percentage change = gain of today/prev closing price * 100

  const percentageChange = Number(
    ((Math.abs(gainOrLossToday) / previousClosing) * 100).toFixed(2)
  );

  return (
    <div>
      <h2 className='stockName border-b-2 text-3xl font-semibold ps-2'>
        {stockName}
      </h2>
      <div className='stockMetrics flex items-center p-2 gap-4'>
        <span className='text-4xl font-semibold'>
          {currencySymbol}
          {currentPrice}
        </span>
        <span
          className={`flex h-10 rounded-md items-center w-20 px-1 ${priceBackgroundColor} ${priceTextColor}`}
        >
          {isPriceUp ? <MoveUp size={20} /> : <MoveDown size={20} />}
          <span className='text-xl font-semibold'>{percentageChange}%</span>
        </span>
        <span className={`${priceTextColor} font-bold`}>{gainOrLossToday}</span>
      </div>
      <span className='ps-2'>{date}</span>
    </div>
  );
}

export default StockHeader;
