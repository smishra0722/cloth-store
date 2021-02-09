import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import rootReducer from './root-reducer';

const middleware = [Logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));