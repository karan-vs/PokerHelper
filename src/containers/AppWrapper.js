import { connect } from 'react-redux';
import App from '../components/App';
import { ui } from '../actions';

const mapStateToProps = (state) => ({
    shouldShowPlayerNumSelectionModal: state.getIn(['ui', 'shouldShowPlayerNumSelectionModal'])
});

const mapDispatchToProps = {
    handlePlayerSelection: ui.handlePlayerSelection
}

const AppWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppWrapper;