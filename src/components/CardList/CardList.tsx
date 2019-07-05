import React from "react"
import "./CardList.scss"
import Card from "../Card/Card"

interface CardListState {
    cards: {city: string, places: number}[];
}

class CardList extends React.Component<{},CardListState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            cards: []
        };
    }

    componentDidMount(){
        this.setState(
            {
                cards: Array(15).fill({city: "Симферополь", places: 345})
            }
        );
    }

    render(){
        return(
            <div className="CardList">
                {
                    this.state.cards.map((card) => 
                        <Card key={card.city} city={card.city} places={card.places}/>
                    )
                }
            </div>
        );
    }
}

export default CardList;