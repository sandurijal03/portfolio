import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <AppStyled>
      <Sidebar />
    </AppStyled>
  );
};

const AppStyled = styled.div`
  background-color: red;
`;

export default App;
