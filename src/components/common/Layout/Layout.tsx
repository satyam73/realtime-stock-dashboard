import React from 'react';
import { LayoutProps } from './layout.types';
import Navbar from '@components/common/Navbar/Navbar';

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
