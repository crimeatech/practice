import React from 'react';
import { cn } from '@bem-react/classname';
import RegionalSites from "../RegionalSites/RegionalSites";
import UserCabinet from "../UserCabinet/UserCabinet";
import ForSleeping from "../ForSleeping/ForSleeping";
import "./Navigation.scss"
class Navigation extends React.Component{
    public render(){
        const cnNavigation = cn("Navigation");
        return (
            <div className={cnNavigation()}>
                <RegionalSites/>
                <UserCabinet/>
                <ForSleeping/>
            </div>
            );
        }
}

export default Navigation;