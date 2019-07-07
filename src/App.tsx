import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import CardList from "./components/CardList/CardList"
import NavBlock from './components/Header-NavBlock/Header-NavBlock';
const App: React.FC = () => {
  return (
    <Wrapper>
      <NavBlock/>
      <CardList/>
    </Wrapper>
  );
}

export default App;
