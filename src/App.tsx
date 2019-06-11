import * as React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import styled, { createGlobalStyle } from 'styled-components';

///global styling

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Bree+Serif&display=swap');
    font-family: 'Bree Serif', serif;
  }
`;

///

///styling

const Site = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

///

const App: React.FC = () => {
  return (
    <Site>
      <GlobalStyles />
      <Home />
      <Footer />
    </Site>
  );
}

export default App;
