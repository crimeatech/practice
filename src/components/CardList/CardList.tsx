import React from "react"
import { cn } from '@bem-react/classname';
import Card from "../Card/Card"
import "./CardList.scss"


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
        const cnCardList = cn("CardList");
        return(
            <div className={cnCardList()}>
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