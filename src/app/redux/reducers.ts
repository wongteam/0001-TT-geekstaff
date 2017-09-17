import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { IStore } from './IStore';

const { reducer } = require('redux-connect');

import { departments } from './modules/department';
import { employees } from './modules/employees';
import { statistics } from './modules/dashboard';

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
  dashboard: statistics,
  departments,
  employees,
});

export default rootReducer;
