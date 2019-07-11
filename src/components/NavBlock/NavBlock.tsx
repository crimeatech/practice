import React from "react"
import { cn } from '@bem-react/classname';
import Logo from "../Logo/Logo";
import NavBlockLinks from "./NavBlock-Links/NavBlock-Links";
import "./NavBlock.scss"


class NavBlock extends React.Component{

    render(){
        const cnNavBlock = cn("NavBlock");
        return(
            <div className={cnNavBlock()}>
               <Logo/>
               <NavBlockLinks/>
            </div>
        );
    }
}

export default NavBlock;