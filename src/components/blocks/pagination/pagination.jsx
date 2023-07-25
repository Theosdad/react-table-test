import React from 'react';
import { PaginationButton } from '../../ui/pagination-button/pagination-button';
import { PaginationList } from '../../ui/pagination-list/pagination-list';
import { PaginationContainer } from './styles';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationContainer>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Назад
      </PaginationButton>

      <PaginationList
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Далее
      </PaginationButton>
    </PaginationContainer>
  );
};
