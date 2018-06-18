import Immutable from 'immutable';
import { actions } from '../constants';

const initialState = Immutable.fromJS({
    numPlayer: null,
    shouldShowPlayerNumSelectionModal: true
});

const ui = (state = initialState, action) => {
    switch (action.type) {
        case actions.PLAYER_UPDATE: 
            return state.update('numPlayer', () => action.value)
        case actions.PLAYER_NUM_SELECTION_SHOW: 
            return state.update('shouldShowPlayerNumSelectionModal', () => action.value)
        default : 
            return state;
    }
}

export default ui;