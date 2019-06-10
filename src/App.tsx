import React from 'react';
import Home from './components/Home.tsx';
import styled from 'styled-components';

///styling
const App = styled.div`
 display: flex;
`
///

const App: React.FC = () => {
  return (
    <App>
      < Home />
    </App>
  );
}

export default App;
