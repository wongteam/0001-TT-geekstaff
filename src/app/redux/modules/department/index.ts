import { createReducer } from '../../createReducer';
import types from './types';

const initialState = {};

const departments = createReducer(initialState, {
  [types.DEPARTMENTS_FETCH_SUCCESS]: (state: any, {departments}) => ({
    ...state,
    departments,
  }),

  [types.DEPARTMENTS_UPDATE_SUCCESS]: (state: any, {department}) => {
    const newState = {...state};
    newState.departments[department.id] = department;
    return newState;
  },
});

export {departments}
