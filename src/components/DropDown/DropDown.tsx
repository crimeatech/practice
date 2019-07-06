import React, { Component } from 'react'
import "./DropDown.scss"
import { directive } from '@babel/types';

interface DropDownState {
    items: string[],
    selected: number,
    isOpened: boolean
}

export class DropDown extends Component<{},DropDownState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            items: ["Детский сад 1", "Детский сад 2", "Детский сад 3"],
            selected : 0,
            isOpened : true
        };
    }

    toggle = () => this.setState({isOpened: !this.state.isOpened});

    select = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: string) => this.setState({selected: this.state.items.indexOf(item), isOpened: false});

    render() {
        return (
            <div className={"DropDown"+ (this.state.isOpened ? "_opened" : '')}>
                <div className="DropDown-Selected">{this.state.items[this.state.selected]}</div>
                <div className={"DropDown-Arrow" + (this.state.isOpened ? "_opened" : '')} onClick={this.toggle}></div>       
                {
                    this.state.isOpened && 
                    <div className="DropDown-List">
                        {this.state.items.map((item) => <div className="DropDown-ListItem" onClick={e => this.select(e, item)}>{item}</div>)}
                    </div>
                }         
            </div>
        )
    }
}

export default DropDown;
