import React, { Fragment } from "react"
import "./Wrapper.scss"

class Wrapper extends React.Component{
    public render(){
        return (
            <Fragment>
                <div className="Wrapper-bg-gradient"></div>
                <div className="Wrapper-bg-white"></div>
                <div className="Wrapper">
                    {this.props.children}
                </div>
            </Fragment>
            );
        }
}

export default Wrapper;