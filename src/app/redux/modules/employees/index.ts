import { createReducer } from '../../createReducer';
import types from './types';

const initialState = {};

const employees = createReducer(initialState, {
  [types.EMPLOYEES_FETCH_SUCCESS]: (state: any, {employees}) => ({
    ...state,
    employees,
  }),
});

export {employees}
