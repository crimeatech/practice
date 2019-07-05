import React, { Fragment } from "react"
import Navigation from "../Navigation/Navigation"
import "./Wrapper.scss"


class Wrapper extends React.Component{
    public render(){
        return (
            <Fragment>
                <div className="Wrapper-bg-gradient"></div>
                <div className="Navigation-Top"><Navigation/></div>
                <div className="Wrapper">
            
                    {this.props.children}
                
                   
                </div>
            </Fragment>

            );
        }
}

export default Wrapper;