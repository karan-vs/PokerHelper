import { connect } from 'react-redux';
import Cards from '../components/Cards';
import { playerCards } from '../actions';

const mapStateToProps = (state) => ({
    cardsInfo: state.get('cards'),
    activeDeck: state.getIn(['playerCards', 'activeDeck']),
    activeIndex: state.getIn(['playerCards', 'activeIndex'])
});

const mapDispatchToProps = {
    updateCardSlotWithCard: playerCards.updateCardSlotWithCard
}

const CardsWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);

export default CardsWrapper;