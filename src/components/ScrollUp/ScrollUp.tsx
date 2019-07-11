import React, { Component } from 'react'
import { cn } from '@bem-react/classname';
import "./ScrollUp.scss"

interface ScrollUpState {
    isShowed: boolean
}

export class ScrollUp extends Component<{}, ScrollUpState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isShowed : false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', () => this.setState({isShowed: window.pageYOffset >= window.innerHeight * 0.2}));
    }

    scroll = () => window.scrollTo({top: 0, behavior: "smooth"});

    render() {
        const cnScrollUp = cn("ScrollUp")
        return (
            <div className={cnScrollUp({visible: this.state.isShowed})} onClick={this.scroll}></div>
        )
    }
}

export default ScrollUp;
