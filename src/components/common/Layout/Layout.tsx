import { LayoutProps } from './layout.types';
import Navbar from '@components/common/Navbar/Navbar';

function Layout({ searchRef, children }: LayoutProps) {
  return (
    <div className='flex flex-col gap-8'>
      <Navbar searchRef={searchRef} />
      {children}
    </div>
  );
}

export default Layout;
