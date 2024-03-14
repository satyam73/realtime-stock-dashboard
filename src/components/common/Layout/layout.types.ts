import { FormEvent, ReactNode } from 'react';

export type LayoutProps = {
  searchRef: React.RefObject<HTMLInputElement>;
  children: ReactNode;
};
