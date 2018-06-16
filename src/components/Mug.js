import times from 'lodash/times';
import CardSlot from './CardSlot';

import './_mug.scss';

const Mug = ({ deck, activeDeck, activeIndex, handleCardSlotClick, selectedCards }) => {
    return (
        <div className="mug">
            {times(4).map((index) => {
                const cardIndexes = [-3, -4, -1, -2];
                const selectedCard = selectedCards.find((sCard) => (sCard.get('index') === cardIndexes[index] && sCard.get('deck') === deck));
                return (
                    <CardSlot key={index} activeDeck={activeDeck} activeIndex={activeIndex} selectedCard={selectedCard} cardIndex={cardIndexes[index]} deck={deck} handleCardSlotClick={handleCardSlotClick}  />    
                )
            })}
        </div>
    )
}

export default Mug;