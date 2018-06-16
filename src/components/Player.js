import React from 'react';
import classNames from 'classnames';
import PlayingArea from './PlayingArea';
import Mug from './Mug';
import CardsProbability from './CardsProbability';

import './_player.scss';

const PlayerDetails = ({ playerName, status }) => {
    return (
        <div>
            <span>{`Player name: ${playerName}`}</span>
            <span>{`Status: ${status}`}</span>
        </div>
    )
}

class Player extends React.Component {
    render () {

        const { playerName, status, className, handleCardSlotClick, selectedCards, activeDeck, activeIndex } = this.props;

        const playerCls = classNames('player', className);

        return (
            <div className={playerCls}>
                {/* <PlayerDetails playerName={playerName} status={status} /> */}
                <div className="player-area-mug">
                    <Mug deck="C" activeDeck={activeDeck} activeIndex={activeIndex} handleCardSlotClick={handleCardSlotClick} selectedCards={selectedCards} />
                    <PlayingArea activeDeck={activeDeck} activeIndex={activeIndex} selectedCards={selectedCards} deck="C" handleCardSlotClick={handleCardSlotClick} />
                </div>
                <CardsProbability />
            </div>
        )
    }
}

export default Player;