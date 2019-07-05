import React, { Component } from 'react'
import "./SearchBar.scss"
import Button from '../SearchButton/SearchButton';
import DropDown from '../DropDown/DropDown';

export class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <DropDown/>
                <input className="SearchBar-Input" type="text" placeholder="Номер заявления" onInput={(e: React.ChangeEvent<HTMLInputElement>) => {e.target.value=e.target.value.replace(/[^\d]/,'')}}/>
                <Button/>
            </div>
        )
    }
}

export default SearchBar;
