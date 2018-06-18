import { actions } from '../constants';

const handlePlayerSelection = (numPlayer) => {
    return (dispatch) => {
        dispatch({
            type: actions.PLAYER_NUM_SELECTION_SHOW,
            value: false
        })

        dispatch({
            type: actions.PLAYER_UPDATE,
            value: numPlayer
        })
    }
}

export default {
    handlePlayerSelection
};