import React from 'react';
import Player from './Player';
import PlayingArea from './PlayingArea';

import './_deck.scss';

class Deck extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {

        const { handleCardSlotClick, selectedCards, activeDeck, activeIndex } = this.props;

        return (
            <div className="deck">
                <div className="deckOpponent">
                    <PlayingArea activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={selectedCards} deck="A" handleCardSlotClick={handleCardSlotClick} />
                    <PlayingArea activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={selectedCards} deck="B" handleCardSlotClick={handleCardSlotClick} />
                </div>
                <Player className="self" handleCardSlotClick={handleCardSlotClick} activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={selectedCards} />
            </div>
        )
    }
}

export default Deck;