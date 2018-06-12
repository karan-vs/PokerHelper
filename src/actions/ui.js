import { actions } from '../constants';

const handleCardSlotClick = (activeDeck, activeIndex) => {
    return (dispatch, getState) => {
        console.log(activeDeck, activeIndex)
    }
}

export default {
    handleCardSlotClick
};