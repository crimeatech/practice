import React from "react"
import { cn } from '@bem-react/classname';
import Logo from "../Logo/Logo";
import NavBlockLinks from "../Header-NavBlock-Links/Header-NavBlock-Links";
import "./Header-NavBlock.scss"


class NavBlock extends React.Component{

    render(){
        const cnNavBlock = cn("Header-NavBlock");
        return(
            <div className={cnNavBlock()}>
               <Logo/>
               <NavBlockLinks/>
            </div>
        );
    }
}

export default NavBlock;