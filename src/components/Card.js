import React from 'react';
import classNames from 'classnames';

import './_card.scss';

class Card extends React.Component {
    
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        if (this.props.isUsed) return;
        this.props.updateCardSlotWithCard(this.props.suit, this.props.rank);
    }

    render () {

        const cardCls = classNames('card', { 'card-isUsed': this.props.isUsed });

        return (
            <div onClick={this.handleClick}>
                <img className={cardCls} src={`/assets/png/${this.props.rank}${this.props.suit}.png`} />
            </div>
        );
    }
}

export default Card;