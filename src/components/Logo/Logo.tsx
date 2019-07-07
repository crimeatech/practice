import React from "react"
import "./Logo.scss"
import "../Header-NavBlock/Header-NavBlock"

class Logo extends React.Component{

    render(){
        return(
           <a href="#"> <div className="Header-Logo">
               
                <div className="Header-Logo-And-Text">
               <span className="Header-Logo-Kindergarten"> Детские сады</span>
              
                <span className="Header-Logo-Crimea">Республики Крым</span>
                   </div>
               
            </div>
            </a>
        );
    }
}

export default Logo;