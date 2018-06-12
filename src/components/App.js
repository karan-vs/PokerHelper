import CardsWrapper from '../Containers/CardsWrapper';
import DeckWrapper from '../Containers/DeckWrapper';

import './_app.scss';

const App = () =>  {
    return (
        <div className="app">
            <DeckWrapper />
            <CardsWrapper />
        </div>
    ) 
}

export default App;