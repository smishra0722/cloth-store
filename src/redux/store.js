import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import rootReducer from './root-reducer';

// Redux-persist
import {persistStore} from 'redux-persist';

const middleware = [Logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);


export {store, persistor};