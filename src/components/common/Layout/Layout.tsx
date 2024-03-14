import React from 'react';
import { LayoutProps } from './layout.types';
import Navbar from '@components/common/Navbar/Navbar';

function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col gap-8'>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
