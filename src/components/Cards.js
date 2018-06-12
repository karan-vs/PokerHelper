import React from 'react';
import Card from './Card';
import { suits as suitsConst } from '../constants';

import './_cards.scss';

class Cards extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {

        const { suits, cards } = this.props;

        return (
            <div className="cards">
                {suits.map((suit) => {
                    return (
                        <div key={suit}>
                            <div className="cards-suit">{suitsConst.get(suit)}</div>
                            <div className="allCards">
                                {cards.map((card, index) => <Card key={index} rank={card} suit={suit} updateCardSlotWithCard={this.props.updateCardSlotWithCard} />)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Cards;