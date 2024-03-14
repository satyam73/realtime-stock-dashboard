import SearchBar from '@components/SearchBar/SearchBar';
import { NavbarProps } from './navbar.types';

function Navbar({searchRef}: NavbarProps) {
  return (
    <header
      className={'h-14 flex items-center border-b-2 shadow-sm border-dashed'}
    >
      <div className='logo text-2xl font-bold'>Stocker</div>
      <div className='mx-auto w-4/5'>
        <SearchBar
          searchRef={searchRef}
        />
      </div>
    </header>
  );
}

export default Navbar;
