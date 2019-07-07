import React from "react"
import "./Header-NavBlock.scss"
import Logo from "../Logo/Logo";
import NavBlockLinks from "../Header-NavBlock-Links/Header-NavBlock-Links";



class NavBlock extends React.Component{

    render(){
        return(
            <div className="Header-NavBlock">
               <Logo/>
               <NavBlockLinks/>
            </div>
        );
    }
}

export default NavBlock;