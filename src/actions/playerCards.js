import Immutable from 'immutable';
import { actions, cards as cardsConst } from '../constants';

const handleCardSlotClick = (activeDeck, activeIndex) => {
    return (dispatch, getState) => {

        let selectedCards = getState().getIn(['playerCards', 'selectedCards']);

        const payload = {
            index: activeIndex,
            deck: activeDeck,
            cardSuit: null,
            cardRank: null
        };
        
        const selectedCardIndex = selectedCards.findIndex((sCard) => (sCard.get('index') === activeIndex && sCard.get('deck') === activeDeck)); 

        if (selectedCardIndex < 0) {
            selectedCards = selectedCards.push(Immutable.fromJS(payload));
        }

        dispatch({
            type: actions.UPDATE_INDEX,
            payload: selectedCards,
            activeDeck,
            activeIndex
        })
    }
}

const updateCardSlotWithCard = (suit, rank) => {
    return (dispatch, getState) => {

        const activeIndex = getState().getIn(['playerCards', 'activeIndex']);
        const activeDeck = getState().getIn(['playerCards', 'activeDeck']);

        let selectedCards = getState().getIn(['playerCards', 'selectedCards']);

        if (selectedCards.size === 0) return;

        const selectedCardIndex = selectedCards.findIndex((sCard) => (sCard.get('index') === activeIndex && sCard.get('deck') === activeDeck));
        
        if (selectedCardIndex < 0) return;

        let selectedCard = selectedCards.get(selectedCardIndex);

        selectedCard = selectedCard.set('cardRank', rank).set('cardSuit', suit);

        const payload = {
            index: activeIndex + 1,
            deck: activeDeck,
            cardSuit: null,
            cardRank: null
        };

        selectedCards = selectedCards.set(selectedCardIndex, selectedCard).push(Immutable.fromJS(payload));

        dispatch({
            type: actions.CARD_USED,
            index: cardsConst.suits.get(suit),
            cardIndex: cardsConst.cards.get(rank)
        })

        dispatch({
            type: actions.UPDATE_CARD_SLOT_WITH_CARD,
            payload: selectedCards,
            activeIndex: activeIndex + 1
        })
    }
}

export default {
    handleCardSlotClick,
    updateCardSlotWithCard
};