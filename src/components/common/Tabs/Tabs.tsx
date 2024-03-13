import { MouseEvent } from 'react';
import { TabsProps } from './tabs.types';

function Tabs({ tabs, activeTabIndex, onTabClick }: TabsProps) {
  const childToRender = tabs[activeTabIndex].component;
  const tabsItems = tabs.map((tab, index) => {
    if (index === activeTabIndex) {
      return (
        <li
          className='me-2'
          key={tab.id}
          onClick={(e: MouseEvent<HTMLLIElement>) => onTabClick(e, index)}
        >
          <a
            href='#'
            className='inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
            aria-current='page'
          >
            {tab.name}
          </a>
        </li>
      );
    }

    return (
      <li
        className='me-2'
        key={tab.id}
        onClick={(e: MouseEvent<HTMLLIElement>) => onTabClick(e, index)}
      >
        <a
          href='#'
          className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
        >
          {tab.name}
        </a>
      </li>
    );
  });
  return (
    <div>
      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        <ul className='flex flex-wrap -mb-px'>{tabsItems}</ul>
      </div>
      <div>{childToRender}</div>
    </div>
  );
}

export default Tabs;
