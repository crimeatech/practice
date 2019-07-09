import React from "react"
import { cn } from '@bem-react/classname';
import "./Header-NavBlock-Links.scss"
import "./Header-NavBlock-Links"

class NavBlockLinks extends React.Component{

    render(){
        const cnNavBlockLinks = cn("Header-NavBlock-Links");
        return(
           <div className={cnNavBlockLinks()}>
           <a href="#">Публикации</a>
           <a href="#">Обратная связь</a>
           </div>
        );
    }
}

export default NavBlockLinks;