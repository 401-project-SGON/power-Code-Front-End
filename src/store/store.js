import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promis from 'redux-promise-middleware';

import reducer from './reducers.js';
import courseReducer from './reducers/courseReducer.js';

const middleware = applyMiddleware(promis,thunk,logger);

let reducers = combineReducers({ reducer, courseReducer});
const store = () => {
  return createStore(reducers, middleware );
};

export default store();
