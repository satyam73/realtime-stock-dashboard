import { Search } from 'lucide-react';
import { SearchBarProps } from './searchBar.types';

function SearchBar({ searchRef }: SearchBarProps) {
  return (
    <div className='relative w-full'>
      <input
        type='text'
        name='stockName'
        placeholder='Search stock symbol'
        aria-label='Search a stock with symbol name'
        className='border p-2 text-md font-semibold focus:outline-none rounded-xl w-full pr-8'
        ref={searchRef}
      />
      <span className='absolute top-3 right-2 bg-white'>
        <Search size={20} />
      </span>
    </div>
  );
}

export default SearchBar;
