import React, { Component } from 'react'
import { cn } from '@bem-react/classname';
import "./ScrollUp.scss"

export class ScrollUp extends Component {
    scroll = () => window.scrollTo({top: 0, behavior: "smooth"});

    render() {
        const cnScrollUp = cn("ScrollUp")
        return (
            <div className={cnScrollUp()} onClick={this.scroll}>
                <div className={cnScrollUp("Arrow")}></div>
            </div>
        )
    }
}

export default ScrollUp;
