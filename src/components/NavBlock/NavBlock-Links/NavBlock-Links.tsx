import React from "react"
import { cn } from '@bem-react/classname';
import "./NavBlock-Links.scss"
import "./NavBlock-Links"

class NavBlockLinks extends React.Component{

    render(){
        const cnNavBlockLinks = cn("NavBlock-Links");
        return(
           <div className={cnNavBlockLinks()}>
           <a href={"href"}>Публикации</a>
           <a href={"href"}>Обратная связь</a>
           </div>
        );
    }
}

export default NavBlockLinks;