import React from 'react';
import "./Navigation.scss"
import RegionalSites from "../RegionalSites/RegionalSites";
import UserCabinet from "../UserCabinet/UserCabinet";
import ForSleeping from "../ForSleeping/ForSleeping";
class Navigation extends React.Component{
    public render(){
        return (
            <div>
                <RegionalSites/>
                <UserCabinet/>
                <ForSleeping/>
            </div>
            );
        }
}

export default Navigation;