import { createStore, compose, combineReducers } from 'redux';
import modal from './reducers';

const rootReducer = combineReducers({ modal })
const composeEnhancers = typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default createStore(rootReducer, composeEnhancers());
