import { createReducer } from '../../createReducer';
import { DATA_FETCH_SUCCESS } from './types';

const initialState = {
  departmentsTotal: 0,
  employeesTotal: 0,
};

const statistics = createReducer(initialState, {
  [DATA_FETCH_SUCCESS]: (state: any, payload: any) => ({
    ...state,
    ...payload,
  }),
});

export {statistics}
