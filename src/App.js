import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';

const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <MainContentStyled>
        <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
        </div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/portfolio' component={PortfolioPage} />
          <Route exact path='/blogs' component={BlogsPage} />
          <Route exact path='/resume' component={ResumePage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </MainContentStyled>
    </div>
  );
};

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
