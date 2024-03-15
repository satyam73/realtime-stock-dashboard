import {
  CURRENT_PRICE_API_URL,
  INTRADAY_PRICES_API_URL,
} from '@/src/constants';
export async function getCurrentPrice(stockSymbol = 'META') {
  try {
    const response = await fetch(CURRENT_PRICE_API_URL(stockSymbol));
    const data = await response.json();
    if (response.status !== 200) throw new Error('Some error occured');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getIntradayPrices(stockSymbol = 'META', range = '1d') {
  try {
    const response = await fetch(INTRADAY_PRICES_API_URL(stockSymbol, range));
    const data = await response.json();
    if (response.status !== 200) throw new Error('Some error occured');
    return transformToChartData(data);
  } catch (error) {
    throw error;
  }
}

function transformToChartData(intradayPrices: any) {
  const pricesArray: number[] = [];
  const timeArray: string[] = [];
  const transformedData = {
    pricesArray,
    timeArray,
  };

  if(!intradayPrices?.[0]) return { chartData: transformedData, realData: intradayPrices };

  intradayPrices?.forEach((priceData: any) => {
    if (priceData?.close && priceData?.minute) {
      pricesArray.push(priceData?.close);
      timeArray.push(priceData?.minute);
    }
  });

  return { chartData: transformedData, realData: intradayPrices };
}
