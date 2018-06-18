import React from 'react';
import Card from './Card';

import './_cards.scss';

class Cards extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {

        const { cardsInfo, activeDeck, activeIndex } = this.props;
        
        return (
            <div className="cards">
                {cardsInfo.map((cardInfo) => {
                    return (
                        <div className="allCards" key={cardInfo.get('suit')}>
                            {cardInfo.get('cards').map((card, index) => <Card key={index} activeDeck={activeDeck} activeIndex={activeIndex} isUsed={card.get('isUsed')} rank={card.get('name')} suit={cardInfo.get('suit')} updateCardSlotWithCard={this.props.updateCardSlotWithCard} />)}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Cards;