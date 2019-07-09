import React, { Fragment } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import CardList from './components/CardList/CardList';
import Navigation from './components/Navigation/Navigation';

const App: React.FC = () => {
  return (
    <Fragment>
      <Navigation/>
      <Wrapper>
        <SearchBar/>
        <CardList/>
      </Wrapper>
      <Footer/>
    </Fragment>
  );
}

export default App;
