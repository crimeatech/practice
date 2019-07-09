import React, { Fragment } from "react"
import Navigation from "../Navigation/Navigation"
import { cn } from '@bem-react/classname';
import "./Wrapper.scss"


class Wrapper extends React.Component{
    public render(){
        const cnWrapper=cn("Wrapper");
        const cnBackground=cn("Background");
        const cnNavigation=cn("Navigation");
        return (
            <Fragment>
                <div className={cnBackground()}>
                    <div className={cnBackground("Top", {gradient: true})}></div>
                    <div className={cnBackground("Bottom", {color: "white"})}></div>
                </div>
                <div className={cnWrapper()}>
                    {this.props.children}
                
                   
                </div>
            </Fragment>

            );
        }
}

export default Wrapper;