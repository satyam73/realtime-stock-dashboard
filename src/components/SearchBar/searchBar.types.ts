import { FormEventHandler } from 'react';

export type SearchBarProps = {
  searchValue: string;
  onSearchInput: FormEventHandler<HTMLInputElement>;
};
