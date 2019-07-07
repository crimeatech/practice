import React from "react"
import "./Header-NavBlock-Links.scss"
import "./Header-NavBlock-Links"

class NavBlockLinks extends React.Component{

    render(){
        return(
           <div className="Header-NavBlock-Links">
           <a href="#">Публикации</a>
           <a href="#">Обратная связь</a>
           </div>
        );
    }
}

export default NavBlockLinks;