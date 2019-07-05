import React, { Component } from 'react'
import "./SearchBar.scss"
import Button from '../SearchButton/SearchButton';

export class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <input className="SearchBar-Input" type="text"/>
                <Button/>
            </div>
        )
    }
}

export default SearchBar;
