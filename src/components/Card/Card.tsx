import React from "react"
import { cn } from '@bem-react/classname';
import "./Card.scss"
import img from "../../assets/simferopol_gerbB.gif"

interface CardProps {
    city: string,
    places: number;
}

class Card extends React.Component<CardProps, {}>{
    render() {
        const cnCard = cn("Card");
        return (
            <div className={cnCard()}>
                <img className={cnCard("Image")} src={img} alt="city"/>
                <div className={cnCard("Info")}>
                    <div className={cnCard("Title")}>{this.props.city}</div>
                    <div className={cnCard("Places")}><div className={cnCard("Count")}>{this.props.places}</div>свободных мест</div>
                </div>
            </div>
        );
    }
}

export default Card;