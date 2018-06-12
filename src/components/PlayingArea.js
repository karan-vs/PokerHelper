import React from 'react';
import times from 'lodash/times';
import CardSlot from './CardSlot';

import './_playingArea.scss';

const PlayingAreaSection = ({ handleCardSlotClick, deck, selectedCards, activeDeck, activeIndex }) => {
    return (
        <div className="playingAreaSection">
            {times(13).map((index) =>  {

                const selectedCard = selectedCards.find((sCard) => (sCard.get('index') === index && sCard.get('deck') === deck));

                if (index === 2  || index ===  7) {
                    return (
                        <React.Fragment key={index}>
                            <CardSlot activeDeck={activeDeck} activeIndex={activeIndex} selectedCard={selectedCard} deck={deck} cardIndex={index} handleCardSlotClick={handleCardSlotClick} key={index} />
                            <br/>
                        </React.Fragment>
                    )
                }
                return <CardSlot activeDeck={activeDeck} activeIndex={activeIndex} selectedCard={selectedCard} deck={deck} cardIndex={index} handleCardSlotClick={handleCardSlotClick} key={index} />
            })}
        </div>
    )
}

class PlayingArea extends React.Component {
    render () {

        const { activeDeck, activeIndex } = this.props;

        return (
            <div>
                <PlayingAreaSection activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={this.props.selectedCards} deck={this.props.deck} handleCardSlotClick={this.props.handleCardSlotClick} />
            </div>
        )
    }
}  

export default PlayingArea;