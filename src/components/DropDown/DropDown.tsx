import React, { Component } from 'react'
import { cn } from '@bem-react/classname';
import "./DropDown.scss"

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
            isOpened : false
        };
    }

    toggle = () => this.setState({isOpened: !this.state.isOpened});

    select = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: string) => this.setState({selected: this.state.items.indexOf(item), isOpened: false});

    render() {
        const cnDropDown = cn("DropDown");
        return (
            <div className={cnDropDown({opened: this.state.isOpened})}>
                <div className={cnDropDown("Selected")}>{this.state.items[this.state.selected]}</div>
                <div className={cnDropDown("Arrow", {opened: this.state.isOpened})} onClick={this.toggle}></div>       
                {
                    this.state.isOpened && 
                    <div className={cnDropDown("List")}>
                        {this.state.items.map((item) => <div className={cnDropDown("ListItem")} onClick={e => this.select(e, item)}>{item}</div>)}
                    </div>
                }         
            </div>
        )
    }
}

export default DropDown;
