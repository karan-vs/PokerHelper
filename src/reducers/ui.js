import Immutable from 'immutable';
import { actions } from '../constants';

const initialState = Immutable.fromJS({
    activeIndex: null,
    activeDeck: null
});

const ui = (state = initialState, action) => {
    switch (action.type) {
        // case actions.UPDATE_INDEX : 
        //     return state.update('activeIndex', () => action.activeIndex).update('activeDeck', () => action.activeDeck)
        default : 
            return state;
    }
}

export default ui;