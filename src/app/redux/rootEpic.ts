import { combineEpics } from 'redux-observable';

import {
  fetchDepartments,
  fetchDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from './modules/department/epics';

const rootEpic = combineEpics(
  fetchDepartments,
  fetchDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
);

export { rootEpic }
