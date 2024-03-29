import React from "react"
import { cn } from '@bem-react/classname';
import "./NavBlock-Links.scss"
import "./NavBlock-Links"
import FeedbackForm from "../../FeedbackForm/FeedbackForm";
import "./NavBlock-Links.scss"
import "./NavBlock-Links"


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
        const cnNavBlockLinks = cn("NavBlock-Links");
        return(
            <div className={cnNavBlockLinks()}>
                <a href={"href"}>Публикации</a>
                <p onClick={this.showModal}>Обратная связь</p>
                {this.state.modal && <FeedbackForm close={this.closeModal}/>}
            </div>
        );
    }
}

export default NavBlockLinks;