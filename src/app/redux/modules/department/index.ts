import { createReducer } from '../../createReducer';
import types from './types';

const initialState = {};

const departments = createReducer(initialState, {
  [types.DEPARTMENTS_FETCH_SUCCESS]: (state: any, {departments}) => ({
    ...state,
    departments,
  }),
});

export {departments}
