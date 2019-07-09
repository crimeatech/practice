import React, { Fragment } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import NavBlock from './components/Header-NavBlock/Header-NavBlock';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import CardList from './components/CardList/CardList';
import Navigation from './components/Navigation/Navigation';

const App: React.FC = () => {
  return (
    <Fragment>
      <Navigation/>
      <Wrapper>
        <NavBlock/>
        <SearchBar/>
        <CardList/>
      </Wrapper>
      <Footer/>
    </Fragment>
  );
}

export default App;
