import SearchBar from '@components/SearchBar/SearchBar';
import { NavbarProps } from './navbar.types';

function Navbar({searchRef}: NavbarProps) {
  return (
    <header
      className={'h-14 flex items-center border-b-2 shadow-sm border-dashed px-2'}
    >
      <span className='logo text-2xl font-bold max-sm:hidden'>Stocker</span>
      <span className='logo text-2xl font-bold sm-visible'>S</span>
      <div className='mx-auto w-4/5'>
        <SearchBar
          searchRef={searchRef}
        />
      </div>
    </header>
  );
}

export default Navbar;
