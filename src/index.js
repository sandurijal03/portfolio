import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <>
    <GlobalStyled />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('root'),
);
