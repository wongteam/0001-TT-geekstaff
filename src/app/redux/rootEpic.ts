import { combineEpics } from 'redux-observable';

import {
  fetchDepartments,
  fetchDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from './modules/department/epics';

import {
  fetchEmployees,
  createEmployee,
  updateEmployees,
  deleteEmployees,
} from './modules/employees/epics';

const rootEpic = combineEpics(
  fetchDepartments,
  fetchDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,

  fetchEmployees,
  createEmployee,
  updateEmployees,
  deleteEmployees,
);

export { rootEpic }
