import React from "react"
import { cn } from '@bem-react/classname';
import Card from "../Card/Card"
import "./CardList.scss"

// Ничего лучше чем вручную импортировать img не получается в ts
import alushta from '../../assets/banners/alushta.png'
import armyansk from '../../assets/banners/armyansk.png'
import bahchisarayskii_rn from '../../assets/banners/bahchisarayskii_rn.png'
import belgorodskii_rn from '../../assets/banners/belgorodskii_rn.png'
import chernomorskii_rn from '../../assets/banners/chernomorskii_rn.png'
import evpatoria from '../../assets/banners/evpatoria.png'
import feodosia from '../../assets/banners/feodosia.png'
import jankoi from '../../assets/banners/jankoi.png'
import jankoyskii_rn from '../../assets/banners/jankoyskii_rn.png'
import kerch from '../../assets/banners/kerch.png'
import kirovskii_rn from '../../assets/banners/kirovskii_rn.png'
import krasnogvardeiskii_rn from '../../assets/banners/krasnogvardeiskii_rn.png'
import krasnoperekopsk from '../../assets/banners/krasnoperekopsk.png'
import krasnoperekopskii_rn from '../../assets/banners/krasnoperekopskii_rn.png'
import leninskii_rn from '../../assets/banners/leninskii_rn.png'
import nizhnegorskii_rn from '../../assets/banners/nizhnegorskii_rn.png'
import pervomayskii_rn from '../../assets/banners/pervomayskii_rn.png'
import razdolnenskii_rn from '../../assets/banners/razdolnenskii_rn.png'
import saki from '../../assets/banners/saki.png'
import sakskii_rn from '../../assets/banners/sakskii_rn.png'
import simferopol from '../../assets/banners/simferopol.png'
import simferopolskii_rn from '../../assets/banners/simferopolskii_rn.png'
import sovetskii_rn from '../../assets/banners/sovetskii_rn.png'
import sudak from '../../assets/banners/sudak.png'
import yalta from '../../assets/banners/yalta.png'

interface CardListState {
    cards: { 
        city: string, 
        places: number,
        banner: any
    }[];
}

class CardList extends React.Component<{}, CardListState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            cards: [
                {
                    city: 'Алушта',
                    places: 345,
                    banner: alushta
                },
                {
                    city: 'Армянск',
                    places: 345,
                    banner: armyansk
                },
                {
                    city: 'Джанкой',
                    places: 345,
                    banner: jankoi
                },
                {
                    city: 'Евпатория',
                    places: 345,
                    banner: evpatoria
                },
                {
                    city: 'Керчь',
                    places: 345,
                    banner: kerch
                },
                {
                    city: 'Красноперекопск',
                    places: 345,
                    banner: krasnoperekopsk
                },
                {
                    city: 'Саки',
                    places: 345,
                    banner: saki
                },
                {
                    city: 'Симферополь',
                    places: 345,
                    banner: simferopol
                },
                {
                    city: 'Судак',
                    places: 345,
                    banner: sudak
                },
                {
                    city: 'Феодосия',
                    places: 345,
                    banner: feodosia
                },
                {
                    city: 'Ялта',
                    places: 345,
                    banner: yalta
                },
                {
                    city: 'Бахчисарайский район',
                    places: 345,
                    banner: bahchisarayskii_rn
                },
                {
                    city: 'Белгородский район',
                    places: 345,
                    banner: belgorodskii_rn
                },
                {
                    city: 'Джанкойский район',
                    places: 345,
                    banner: jankoyskii_rn
                },
                {
                    city: 'Кировский район',
                    places: 345,
                    banner: kirovskii_rn
                },
                {
                    city: 'Красногвардейский район',
                    places: 345,
                    banner: krasnogvardeiskii_rn
                },
                {
                    city: 'Красноперекопский район',
                    places: 345,
                    banner: krasnoperekopskii_rn
                },
                {
                    city: 'Ленинский район',
                    places: 345,
                    banner: leninskii_rn
                },
                {
                    city: 'Нижнегорский район',
                    places: 345,
                    banner: nizhnegorskii_rn
                },
                {
                    city: 'Первомайский район',
                    places: 345,
                    banner: pervomayskii_rn,
                },
                {
                    city: 'Раздольненский район',
                    places: 345,
                    banner: razdolnenskii_rn
                },
                {
                    city: 'Сакский район',
                    places: 345,
                    banner: sakskii_rn
                },
                {
                    city: 'Симферопольский район',
                    places: 345,
                    banner: simferopolskii_rn
                },
                {
                    city: 'Советский район',
                    places: 345,
                    banner: sovetskii_rn
                },
                {
                    city: 'Черноморский район',
                    places: 345,
                    banner: chernomorskii_rn
                }
            ]
        };
    }

    render() {
        const cnCardList = cn("CardList");
        return(
            <div className={cnCardList()}>
                {
                    this.state.cards.map((card) => 
                        <Card key={card.city} city={card.city} places={card.places} banner={card.banner}/>
                    )
                }
            </div>
        );
    }
}

export default CardList;

