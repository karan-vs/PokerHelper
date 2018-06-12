import React from 'react';

import './_card.scss';

class Card extends React.Component {
    
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.updateCardSlotWithCard(this.props.suit, this.props.rank);
    }

    render () {
        return (
            <div onClick={this.handleClick}>
                <img className="card" src={`/assets/png/${this.props.rank}${this.props.suit}.png`} />
            </div>
        );
    }
}

export default Card;