import React from 'react';
import { StyledSearch } from './styles';
import searchIconSvg from '../../../assets/search-icon.svg';

export const Search = ({ searchTerm, onSearchChange }) => {
  const searchInputStyle = {
    backgroundImage: `url(${searchIconSvg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '95% 50%'
  };

  return (
    <StyledSearch
      type='search'
      placeholder='Поиск'
      value={searchTerm}
      onChange={onSearchChange}
      style={searchInputStyle}
    />
  );
};
