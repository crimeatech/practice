import React, { Component } from 'react'
import { cn } from '@bem-react/classname';
import Button from '../SearchButton/SearchButton';
import DropDown from '../DropDown/DropDown';
import "./SearchBar.scss"

export class SearchBar extends Component {
    render() {
        const cnSearchBar = cn("SearchBar");
        return (
            <div className={cnSearchBar()}>
                <DropDown/>
                <input className={cnSearchBar("Input")} type="text" placeholder="Номер заявления" onInput={(e: React.ChangeEvent<HTMLInputElement>) => {e.target.value=e.target.value.replace(/[^\d]/,'')}}/>
                <Button/>
            </div>
        )
    }
}

export default SearchBar;
