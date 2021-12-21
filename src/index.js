import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <Router basename='http://sandurijal03.github.io/portfolio'>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
