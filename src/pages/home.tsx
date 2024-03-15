import Tabs from '@components/common/Tabs/Tabs';
import { useCallback, useEffect, useState } from 'react';
import { Tab } from '@/src/types';
import StockHeader from '@components/StockHeader/StockHeader';
import LineChart from '../components/LineChart/LineChart';
import { getCurrentPrice, getIntradayPrices } from '@/src/services/stocks';

function Home({ searchRef }: { searchRef: React.RefObject<HTMLInputElement> }) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [currentPriceData, setCurrentPriceData] = useState<any>([]);
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
  const [activeSymbol, setActiveSymbol] = useState<string>('meta');
  const [intradayPrices, setIntradayPrices] = useState<any>();
  const [isChartLoading, setIsChartLoading] = useState<boolean>(true);
  const [rangeForIntradayPrices, setRangeForIntradayPrices] =
    useState<string>('1d');
  let initialLoad = true;
  const currency = currentPriceData?.[0]?.currency;
  const stockName = currentPriceData?.[0]?.companyName;
  const currentPrice = Number(currentPriceData?.[0]?.latestPrice?.toFixed(2));
  const endRangeForIntradayPrices = new Date(
    intradayPrices?.realData?.[intradayPrices?.realData?.length - 1]?.date
  )?.toUTCString();
  const startRangeForIntradayPrices = new Date(
    intradayPrices?.realData?.[0]?.date
  )?.toUTCString();
  const previousClosing = Number(
    currentPriceData?.[0]?.previousClose?.toFixed(2)
  );
  const latestUpdate =
    currentPriceData?.[0]?.latestUpdate &&
    new Date(currentPriceData?.[0]?.latestUpdate).toUTCString();
  const primaryExchange = currentPriceData?.[0]?.primaryExchange;

  const TIMELINE_TABS_DATA: Tab[] = [
    {
      id: '1d',
      name: '1D',
      component: (
        <LineChart
          timeData={intradayPrices?.chartData?.timeArray}
          priceData={intradayPrices?.chartData?.pricesArray}
          symbol={activeSymbol}
        />
      ),
    },
    {
      id: '5dm',
      name: '5D',
      component: (
        <LineChart
          timeData={intradayPrices?.chartData?.timeArray}
          priceData={intradayPrices?.chartData?.pricesArray}
          symbol={activeSymbol}
        />
      ),
    },
    {
      id: '1mm',
      name: '1M',
      component: (
        <LineChart
          timeData={intradayPrices?.chartData?.timeArray}
          priceData={intradayPrices?.chartData?.pricesArray}
          symbol={activeSymbol}
        />
      ),
    },
  ];
  const POLLING_TIME = 2000;

  useEffect(() => {
    async function getPrice() {
      if (initialLoad) {
        setIsInitialLoading(false);
        initialLoad = false;
      }
      try {
        const data = await getCurrentPrice(activeSymbol);

        if (!data[0]) throw new Error('Please search valid symbol!');

        setCurrentPriceData(data);
      } catch (error) {
        console.log(
          'Some error occured while fetching current price of the stock ',
          error
        );
      } finally {
        setIsInitialLoading(false);
      }
    }

    const interval = setInterval(getPrice, POLLING_TIME);

    return () => clearInterval(interval);
  }, [activeSymbol]);

  useEffect(() => {
    async function onKeyPress(this: HTMLElement, event: KeyboardEvent) {
      if (event.code === 'Enter') {
        setIsInitialLoading(true);
        const sanitizedValue = searchRef?.current?.value?.trim();

        if (!sanitizedValue) return;

        try {
          const data = await getCurrentPrice(sanitizedValue);
          if (!data[0]) {
            alert('Please search valid symbol!');
            throw new Error('Please search valid symbol!');
          }

          setActiveSymbol(sanitizedValue);
          setCurrentPriceData(data);
        } catch (error) {
          console.log(
            'Some error occured while fetching current price of the stock ',
            error
          );
        } finally {
          setIsInitialLoading(false);
        }
      }
    }

    document.body.addEventListener('keypress', onKeyPress);

    return () => document.body.removeEventListener('keypress', onKeyPress);
  }, []);

  const getIntradayPriceData = useCallback(
    async (symbol: null | string = null, range: null | string = null) => {
      setIsChartLoading(true)
      try {
        const data = await getIntradayPrices(
          symbol || activeSymbol,
          range || rangeForIntradayPrices
        );
        if (
          !data.chartData.pricesArray.length ||
          !data.chartData.timeArray.length
        )
          throw new Error('Data is null');

        setIntradayPrices(data);

        return { set: true };
      } catch (error) {
        console.log(
          `Some error occured while fetching intraday prices for ${activeSymbol} with range ${rangeForIntradayPrices}`,
          error
        );
        return { set: false };
      }finally{
        setIsChartLoading(false)
      }
    },
    [activeSymbol, rangeForIntradayPrices]
  );
  useEffect(() => {
    getIntradayPriceData();
  }, [activeSymbol]);

  function onTabClick(index: number) {
    if (activeTabIndex === index) return;

    const range = TIMELINE_TABS_DATA[index].id;
    
    getIntradayPriceData(activeSymbol, range).then((res) => {
      if (!res.set)
        return alert(
          'Chart not avilable right now, please try in few seconds!'
        );
      setRangeForIntradayPrices(range);
      setActiveTabIndex(index);
    });
  }

  if (isInitialLoading) return <h2 className='text-lg mx-auto'>Loading...</h2>;

  return (
    <div className='flex flex-col gap-8'>
      <StockHeader
        currency={currency}
        stockName={stockName}
        currentPrice={currentPrice}
        previousClosing={previousClosing}
        date={latestUpdate}
        primaryExchange={primaryExchange}
      />
      <span>Charts data are not realtime due to limitations for APIs</span>
      <span>
        Showing chart from
        <span className='font-bold text-gray-600'>
          {' '}
          {startRangeForIntradayPrices}{' '}
        </span>
        to{' '}
        <span className='font-bold text-gray-600'>
          {endRangeForIntradayPrices}
        </span>
      </span>
      <Tabs
        tabs={TIMELINE_TABS_DATA}
        activeTabIndex={activeTabIndex}
        onTabClick={onTabClick}
        isChildrenLoading={isChartLoading}
      ></Tabs>
    </div>
  );
}

export default Home;
