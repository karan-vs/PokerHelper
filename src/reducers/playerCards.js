import Immutable from 'immutable';
import { actions } from '../constants';

const initialState = Immutable.fromJS({
    activeIndex: 0,
    activeDeck: 'C',
    selectedCards : [
        {
            index:  0,
            deck: 'C',
            cardSuit: null,
            cardRank: null
        }
    ]
});

const playerCards = (state = initialState, action) => {
    switch (action.type) {
        case actions.UPDATE_INDEX : 
            return state.update('selectedCards', () => action.payload).update('activeIndex', () => action.activeIndex).update('activeDeck', () => action.activeDeck)
        case actions.UPDATE_CARD_SLOT_WITH_CARD : 
            return state.updateIn(['selectedCards'], () => action.payload).update('activeIndex', () => action.activeIndex)
        default : 
            return state;
    }
}

export default playerCards;