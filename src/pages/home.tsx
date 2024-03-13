import Tabs from '@components/common/Tabs/Tabs';
import { MouseEvent, useState } from 'react';
import { Tab } from '@/src/types';
import StockHeader from '@components/StockHeader/StockHeader';

function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const TIMELINE_TABS_DATA: Tab[] = [
    {
      id: '1d',
      name: '1D',
      component: <>Some 1D</>,
    },
    {
      id: '5d',
      name: '5D',
      component: <>Some 5D</>,
    },
    {
      id: '1m',
      name: '1M',
      component: <>Some 1M</>,
    },
    {
      id: '6m',
      name: '6M',
      component: <>Some 6M</>,
    },
    {
      id: '1y',
      name: '1Y',
      component: <>Some 1Y</>,
    },
  ];

  function onTabClick(e: MouseEvent<HTMLElement>, index: number) {
    if (activeTabIndex === index) return;
    
    setActiveTabIndex(index);
  }
  return (
    <div>
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
