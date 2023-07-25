import React from 'react';
import { StyledButton } from './styles';

export const PaginationButton = ({ disabled, onClick, children }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
