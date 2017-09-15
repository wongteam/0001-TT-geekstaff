import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { IStore } from './IStore';

const { reducer } = require('redux-connect');

import { departments } from './modules/department';

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
  departments,
});

export default rootReducer;
