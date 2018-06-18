import CardsWrapper from '../Containers/CardsWrapper';
import DeckWrapper from '../Containers/DeckWrapper';
import PlayerNumSelectionModal from './PlayerNumSelectionModal';

import './_app.scss';

const App = ({ shouldShowPlayerNumSelectionModal, handlePlayerSelection }) =>  {
    return (
        <div className="app">
            {shouldShowPlayerNumSelectionModal && <PlayerNumSelectionModal handlePlayerSelection={handlePlayerSelection} />}
            <DeckWrapper />
            <CardsWrapper />
        </div>
    ) 
}

export default App;