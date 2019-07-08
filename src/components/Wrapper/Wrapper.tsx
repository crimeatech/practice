import React, { Fragment } from "react"
import { cn } from '@bem-react/classname';
import "./Wrapper.scss"

class Wrapper extends React.Component{
    public render(){
        const cnWrapper=cn("Wrapper");
        return (
            <Fragment>
                <div className={cnWrapper("bg-gradient")}></div>
                <div className={cnWrapper("bg-white")}></div>
                <div className={cnWrapper()}>
                    {this.props.children}
                </div>
            </Fragment>
            );
        }
}

export default Wrapper;