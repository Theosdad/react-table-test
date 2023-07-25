import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { Main } from '../layout/main/main';

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Main />
    </Router>
  );
}
