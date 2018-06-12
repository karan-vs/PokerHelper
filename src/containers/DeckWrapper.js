import { connect } from 'react-redux';
import Deck from '../components/Deck';
import { playerCards } from '../actions';

const mapStateToProps = (state) => ({
    selectedCards: state.getIn(['playerCards', 'selectedCards']),
    activeDeck: state.getIn(['playerCards', 'activeDeck']),
    activeIndex: state.getIn(['playerCards', 'activeIndex'])
});

const mapDispatchToProps = {
    handleCardSlotClick: playerCards.handleCardSlotClick
}

const DeckWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Deck);

export default DeckWrapper;