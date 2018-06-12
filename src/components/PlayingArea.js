import React from 'react';
import times from 'lodash/times';
import CardSlot from './CardSlot';

import './_playingArea.scss';

const PlayingAreaSection = ({ handleCardSlotClick, deck, selectedCards, activeDeck, activeIndex, numCardSlot, cardIndexes }) => {
    return (
        <div className="playingAreaSection">
            {times(numCardSlot).map((index) =>  {
                const selectedCard = selectedCards.find((sCard) => (sCard.get('index') === cardIndexes[index] && sCard.get('deck') === deck));
                return (
                    <CardSlot key={index} activeDeck={activeDeck} activeIndex={activeIndex} selectedCard={selectedCard} deck={deck} cardIndex={cardIndexes[index]} handleCardSlotClick={handleCardSlotClick} /> 
                )
            })}
        </div>
    )
}

class PlayingArea extends React.Component {
    render () {

        const { activeDeck, activeIndex } = this.props;
        return (
            <div>
                <PlayingAreaSection cardIndexes={[10,11,12]} numCardSlot={3} activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={this.props.selectedCards} deck={this.props.deck} handleCardSlotClick={this.props.handleCardSlotClick} />
                <PlayingAreaSection cardIndexes={[5,6,7,8,9]} numCardSlot={5} activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={this.props.selectedCards} deck={this.props.deck} handleCardSlotClick={this.props.handleCardSlotClick} />
                <PlayingAreaSection cardIndexes={[0,1,2,3,4]} numCardSlot={5} activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={this.props.selectedCards} deck={this.props.deck} handleCardSlotClick={this.props.handleCardSlotClick} />
            </div>
        )
    }
}  

export default PlayingArea;