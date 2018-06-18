import Immutable from 'immutable';
import { actions } from '../constants';

const initialState = Immutable.fromJS([
    {
        suit: 'S',
        cards: [
            { name: 'A', isUsed: false},
            { name: '2', isUsed: false },
            { name: '3', isUsed: false },
            { name: '4', isUsed: false },
            { name: '5', isUsed: false },
            { name: '6', isUsed: false },
            { name: '7', isUsed: false },
            { name: '8', isUsed: false },
            { name: '9', isUsed: false },
            { name: '10', isUsed: false },
            { name: 'J', isUsed: false },
            { name: 'Q', isUsed: false },
            { name: 'K', isUsed: false }
        ]
    },
    {
        suit: 'H',
        cards: [
            { name: 'A', isUsed: false},
            { name: '2', isUsed: false },
            { name: '3', isUsed: false },
            { name: '4', isUsed: false },
            { name: '5', isUsed: false },
            { name: '6', isUsed: false },
            { name: '7', isUsed: false },
            { name: '8', isUsed: false },
            { name: '9', isUsed: false },
            { name: '10', isUsed: false },
            { name: 'J', isUsed: false },
            { name: 'Q', isUsed: false },
            { name: 'K', isUsed: false }
        ]
    },
    {
        suit: 'C',
        cards: [
            { name: 'A', isUsed: false},
            { name: '2', isUsed: false },
            { name: '3', isUsed: false },
            { name: '4', isUsed: false },
            { name: '5', isUsed: false },
            { name: '6', isUsed: false },
            { name: '7', isUsed: false },
            { name: '8', isUsed: false },
            { name: '9', isUsed: false },
            { name: '10', isUsed: false },
            { name: 'J', isUsed: false },
            { name: 'Q', isUsed: false },
            { name: 'K', isUsed: false }
        ]
    },
    {
        suit: 'D',
        cards: [
            { name: 'A', isUsed: false},
            { name: '2', isUsed: false },
            { name: '3', isUsed: false },
            { name: '4', isUsed: false },
            { name: '5', isUsed: false },
            { name: '6', isUsed: false },
            { name: '7', isUsed: false },
            { name: '8', isUsed: false },
            { name: '9', isUsed: false },
            { name: '10', isUsed: false },
            { name: 'J', isUsed: false },
            { name: 'Q', isUsed: false },
            { name: 'K', isUsed: false }
        ]
    }
]);

const cards = (state = initialState, action) => {
    switch (action.type) {
        case actions.CARD_USED : 
            return state.updateIn([action.index, 'cards', action.cardIndex, 'isUsed'], () => action.value)
        default : 
            return state;
    }
}

export default cards;