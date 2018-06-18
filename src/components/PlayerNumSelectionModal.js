import React from 'react';

import './_playerNumSelectionModal.scss';

class PlayerNumSelectionModal extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            numPlayer : 2
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick () {
        this.props.handlePlayerSelection(this.state.numPlayer);
    }

    handleChange (event) {
        this.setState({
            numPlayer: event.target.value
        })
    }

    render () {
        return (
            <div className="playerNumSelectionModal">
                <div className="playerNumSelectionModal-overlay"></div>
                <div className="playerNumSelectionModal-dialog">
                    <div className="playerNumSelectionModal-text">Choose Num of Players: </div>
                    <select value={this.state.numPlayer} onChange={this.handleChange}>
                        <option value="2">2 Players</option>
                        <option value="3">3 Players</option>
                    </select>
                    <button className="playerNumSelectionModal-button" onClick={this.handleClick}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }

}

export default PlayerNumSelectionModal;