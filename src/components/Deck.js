import React from 'react';
import classNames from 'classnames';
import Player from './Player';
import PlayingArea from './PlayingArea';

import './_deck.scss';

class Deck extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {

        const { handleCardSlotClick, selectedCards, activeDeck, activeIndex, numPlayer } = this.props;

        const deckOpponentCls = classNames('deckOpponent', { 'deckOpponent-2': (numPlayer === 2) });

        return (
            <div className="deck">
                <div className={deckOpponentCls}>
                    <PlayingArea activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={selectedCards} deck="A" handleCardSlotClick={handleCardSlotClick} />
                    {(numPlayer === 3)  && <PlayingArea activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={selectedCards} deck="B" handleCardSlotClick={handleCardSlotClick} />}
                </div>
                <Player className="self" numPlayer={numPlayer} handleCardSlotClick={handleCardSlotClick} activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={selectedCards} />
            </div>
        )
    }
}

export default Deck;