import React from 'react';
import classNames from 'classnames';
import Card from './Card';

import './_cardSlot.scss';

class CardSlot extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.handleCardSlotClick(this.props.deck, this.props.cardIndex);       
    }

    render () {

        const { selectedCard, activeDeck, activeIndex, cardIndex, deck } = this.props;

        const cardSlotCls = classNames('cardSlot', { 'cardSlot-active' :  (deck === activeDeck && cardIndex === activeIndex) });

        return (
            <div className={cardSlotCls} onClick={this.handleClick}>
                {(selectedCard && selectedCard.get('cardSuit')) ? <Card rank={selectedCard.get('cardRank')} suit={selectedCard.get('cardSuit')} /> : null}
            </div>
        )
    }
}

export default CardSlot;