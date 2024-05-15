// store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import apiMiddleware from './MiddleWare';
import rootReducer from './Reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, apiMiddleware)
);

export default store;
