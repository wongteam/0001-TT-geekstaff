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

import {
  fetchStatisticsData,
} from './modules/dashboard/epics';

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

  fetchStatisticsData,
);

export { rootEpic }
