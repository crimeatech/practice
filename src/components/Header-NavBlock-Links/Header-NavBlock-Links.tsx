import React from "react"
import { cn } from '@bem-react/classname';
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import "./Header-NavBlock-Links.scss"
import "./Header-NavBlock-Links"


interface NavState {
    modal : boolean
}

class NavBlockLinks extends React.Component<{}, NavState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            modal : false
        };
    }

    showModal = () => this.setState({modal: true});

    closeModal = () => this.setState({modal: false});

    render(){
        const cnNavBlockLinks = cn("Header-NavBlock-Links");
        return(
                <div className={cnNavBlockLinks()}>
                    <a href={"href"}>Публикации</a>
                    <a href={"href"} onClick={this.showModal}>Обратная связь</a>
                    {this.state.modal && <FeedbackForm close={this.closeModal}/>}
                </div>
        );
    }
}

export default NavBlockLinks;