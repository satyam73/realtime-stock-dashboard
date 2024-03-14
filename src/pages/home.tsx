import Tabs from '@components/common/Tabs/Tabs';
import { MouseEvent, useState } from 'react';
import { Tab } from '@/src/types';
import StockHeader from '@components/StockHeader/StockHeader';
import LineChart from '../components/LineChart/LineChart';

function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
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

  function onTabClick(e: MouseEvent<HTMLElement>, index: number) {
    if (activeTabIndex === index) return;

    setActiveTabIndex(index);
  }
  return (
    <div className='flex flex-col gap-8'>
      <StockHeader
        currency={'USD'}
        stockName={'Meta'}
        currentPrice={483.59}
        previousClosing={505.95}
        date={'Mar 13, 4:08:40 PM UTC+5:30 · USD · NYSE'}
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
