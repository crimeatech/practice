import React, { Fragment } from "react"
import { cn } from '@bem-react/classname';
import "./Wrapper.scss"


class Wrapper extends React.Component{
    public render(){
        const cnWrapper=cn("Wrapper");
        const cnBackground=cn("Background");
        return (
            <Fragment>
                <div className={cnBackground()}>
                    <div className={cnBackground("Top", {gradient: true})}></div>
                </div>
                <div className={cnWrapper()}>
                    {this.props.children}
                </div>
            </Fragment>
            );
    }
}

export default Wrapper;