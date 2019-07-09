import React from "react"
import { cn } from '@bem-react/classname';
import "./Logo.scss"
import "../Header-NavBlock/Header-NavBlock"

class Logo extends React.Component{

    render(){
        const cnLogo = cn("Header-Logo");
        return(
           <a href="#"> <div className={cnLogo()}>
               
                <div className={cnLogo("And-Text")}>
               <span className={cnLogo("Kindergarten")}> Детские сады</span>
              
                <span className={cnLogo("Crimea")}>Республики Крым</span>
                   </div>
               
            </div>
            </a>
        );
    }
}

export default Logo;