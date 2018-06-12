import { connect } from 'react-redux';
import Cards from '../components/Cards';
import { playerCards } from '../actions';

const mapStateToProps = (state) => ({
    suits: state.getIn(['cards', 'deck', 'suits']),
    cards: state.getIn(['cards', 'deck', 'cards'])
});

const mapDispatchToProps = {
    updateCardSlotWithCard: playerCards.updateCardSlotWithCard
}

const CardsWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);

export default CardsWrapper;