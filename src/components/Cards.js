import React from 'react';
import Card from './Card';

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
                        <div className="allCards" key={suit}>
                            {cards.map((card, index) => <Card key={index} rank={card} suit={suit} updateCardSlotWithCard={this.props.updateCardSlotWithCard} />)}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Cards;