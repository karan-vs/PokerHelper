import Immutable from 'immutable';
import { actions } from '../constants';

const initialState = Immutable.fromJS({
    deck: {
        suits: ['S', 'H', 'C', 'D'],
        cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    }
});

const cards = (state = initialState, action) => {
    switch (action.type) {
        case actions.UPDATE_SLOT : 
            return state.update('count', (x) => x + 1)
        default : 
            return state;
    }
}

export default cards;