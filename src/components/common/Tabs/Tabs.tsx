import { TabsProps } from './tabs.types';

function Tabs({ tabs, activeTabIndex, onTabClick, isChildrenLoading }: TabsProps) {
  const childToRender = tabs[activeTabIndex].component;
  const tabsItems = tabs.map((tab, index) => {
    if (index === activeTabIndex) {
      return (
        <li className='me-2' key={tab.id} onClick={() => onTabClick(index)}>
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
      <li className='me-2' key={tab.id} onClick={() => onTabClick(index)}>
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
    <div className='flex flex-col gap-8'>
      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        <ul className='flex flex-wrap -mb-px'>{tabsItems}</ul>
      </div>
      <div>
        {isChildrenLoading ? (
          <h2 className='text-lg'>Loading chart...</h2>
        ) : (
          childToRender
        )}
      </div>
    </div>
  );
}

export default Tabs;
