import Tabs from '@components/common/Tabs/Tabs';
import { useEffect, useState } from 'react';
import { Tab } from '@/src/types';
import StockHeader from '@components/StockHeader/StockHeader';
import LineChart from '../components/LineChart/LineChart';
import { getCurrentPrice } from '@/src/services/stocks';

function Home({ searchRef }: { searchRef: React.RefObject<HTMLInputElement> }) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [currentPriceData, setCurrentPriceData] = useState<any>([]);
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
  const [activeSymbol, setActiveSymbol] = useState<string>();

  let initialLoad = true;
  const currency = currentPriceData?.[0]?.currency;
  const stockName = currentPriceData?.[0]?.companyName;
  const currentPrice = currentPriceData?.[0]?.latestPrice;
  const previousClosing = currentPriceData?.[0]?.previousClose;
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
          timeData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          priceData={[33, 25, 35, 51, 54, 76]}
        />
      ),
    },
    {
      id: '5d',
      name: '5D',
      component: (
        <LineChart
          timeData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          priceData={[33, 255, 35, 51, 254, 76]}
        />
      ),
    },
    {
      id: '1m',
      name: '1M',
      component: (
        <LineChart
          timeData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          priceData={[310, 225, 25, 51, 310, 225, 54, 76]}
        />
      ),
    },
    {
      id: '6m',
      name: '6M',
      component: (
        <LineChart
          timeData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          priceData={[51, 54, 76, 33, 25, 33, 25, 35, 51, 54, 76, 35]}
        />
      ),
    },
    {
      id: '1y',
      name: '1Y',
      component: (
        <LineChart
          timeData={[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
          ]}
          priceData={[
            35, 51, 33, 51, 54, 76, 33, 25, 33, 25, 35, 51, 54, 76, 35, 25, 54,
            76, 35, 51, 33, 51, 54, 76, 33, 25, 33, 25, 35, 51, 54, 76, 35, 25,
            54, 76,
          ]}
        />
      ),
    },
  ];
  const POLLING_TIME = 4000;
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

  function onTabClick(index: number) {
    if (activeTabIndex === index) return;

    setActiveTabIndex(index);
  }

  if (isInitialLoading) return <h2 className='text-lg mx-auto'>Loading...</h2>;

  return (
    <div className='flex flex-col gap-8'>
      <StockHeader
        currency={currency}
        stockName={stockName}
        // TODO: remove this
        currentPrice={Number((currentPrice + Math.random()).toFixed(2))}
        // currentPrice={currentPrice}
        previousClosing={previousClosing}
        date={latestUpdate}
        primaryExchange={primaryExchange}
      />
      <Tabs
        tabs={TIMELINE_TABS_DATA}
        activeTabIndex={activeTabIndex}
        onTabClick={onTabClick}
      ></Tabs>
    </div>
  );
}

export default Home;
