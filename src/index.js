import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppWrapper from './containers/AppWrapper';
import rootReducers from './reducers/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const store = createStore(
    rootReducers, compose(applyMiddleware(thunk), devTools)
);

ReactDOM.render(
    <Provider store={store}>
        <AppWrapper />
    </Provider>, 
    document.getElementById('root')
);