import React from "react"
import { cn } from '@bem-react/classname';
import "./Logo.scss"
import "../NavBlock/NavBlock";


class Logo extends React.Component{

    render(){
        const cnLogo = cn("NavBlock-Logo");
        
        return(
           <a href={"href"}> <div className={cnLogo()}>
               
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