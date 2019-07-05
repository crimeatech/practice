import React from "react"
import "./Card.scss"
import img from "../../assets/simferopol_gerbB.gif"

interface CardProps {
    city: string,
    places: number;
}

class Card extends React.Component<CardProps, {}>{
    render(){
        return(
            <div className="Card">
                <img className="Card-Image" src={img} alt="city"/>
                <div className="Card-Info">
                    <div className="Card-Title">{this.props.city}</div>
                    <div className="Card-Places"><div className="Card-Places_Count">{this.props.places}</div>свободных мест</div>
                </div>
            </div>
        );
    }
}

export default Card;