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
            <div className="CardList-Card">
                <img className="CardList-CardImg" src={img} alt="city"/>
                <div className="CardList-CardInfo">
                    <div className="CardList-CardTitle">{this.props.city}</div>
                    <div className="CardList-CardPlaces"><span>{this.props.places}</span>  свободных мест</div>
                </div>
            </div>
        );
    }
}

export default Card;