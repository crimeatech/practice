import React, { Component } from 'react'
import { cn } from '@bem-react/classname';
import "./SearchButton.scss"

export class Button extends Component {
    render() {
        const cnButton = cn("Button");
        return (
            <div className={cnButton()}>
                Найти заявление
            </div>
        )
    }
}

export default Button;
