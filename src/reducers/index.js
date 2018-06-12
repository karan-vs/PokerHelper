import { combineReducers } from 'redux-immutable';
import cards from './cards';
import ui from './ui';
import playerCards from './playerCards';

const rootReducers = combineReducers({
    cards,
    ui,
    playerCards
});

export default rootReducers;