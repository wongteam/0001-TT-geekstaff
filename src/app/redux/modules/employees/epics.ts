import { Observable } from 'rxjs';

import { EMPLOYEES, withBaseUrl } from '../../../constants/api-endpoints';
import { invokeAPI } from '../../../utils/api-invoker';
import types from './types';
import {
  fetchEmployeesSuccess,
  createEmployeesSuccess,
  updateEmployeesSuccess,
  deleteEmployeesSuccess,
} from './actions';
import { IEmployee } from '../../../models/IEmployee';

export const fetchEmployees = (action$: any) => action$
  .ofType(types.EMPLOYEES_FETCH_API_CALL)
  // .debounceTime(1000) // optional
  .switchMap((_: any) => Observable.of({ type: types.EMPLOYEES_FETCH_START })
    .concat(
      Observable
        .fromPromise(invokeAPI('get', withBaseUrl(EMPLOYEES)))
        .map((response: IEmployee[]) => fetchEmployeesSuccess(response))
        .catch((error: any) => Observable.of({ type: types.EMPLOYEES_FETCH_ERROR, error })),
    ));

// won't use in this version
// export const fetchDepartment = (action$: any) => action$
//   .ofType(types.DEPARTMENT_FETCH_API_CALL)
//   // .debounceTime(1000) // optional
//   .switchMap((action: any) => Observable.of({ type: types.DEPARTMENT_FETCH_START })
//     .concat(
//       Observable
//         .fromPromise(invokeAPI('get', withBaseUrl(`${DEPARTMENTS}/${action.id}`)))
//         .map((department: IDepartment) => fetchDepartmentSuccess(department))
//         .catch((error: any) => Observable.of({ type: types.DEPARTMENT_FETCH_ERROR, error })),
//     ));

export const createEmployee = (action$: any) => action$
  .ofType(types.EMPLOYEES_CREATE_API_CALL)
  .switchMap((action: any) => Observable.of({ type: types.EMPLOYEES_CREATE_START })
    .concat(
      Observable
        .fromPromise(invokeAPI('post', withBaseUrl(EMPLOYEES), action.employees))
        .map((response: IEmployee) => createEmployeesSuccess(response))
        .catch((error: any) => Observable.of({ type: types.EMPLOYEES_CREATE_ERROR, error })),
    ));

export const updateEmployees = (action$: any) => action$
  .ofType(types.EMPLOYEES_UPDATE_API_CALL)
  .switchMap((action: any) => Observable.of({ type: types.EMPLOYEES_UPDATE_START })
    .concat(
      Observable
        .fromPromise(invokeAPI('put', withBaseUrl(`${EMPLOYEES}/${action.employees.id}`), action.employees))
        .map((response: IEmployee) => updateEmployeesSuccess(response))
        .catch((error: any) => Observable.of({ type: types.EMPLOYEES_UPDATE_ERROR, error })),
    ));

export const deleteEmployees = (action$: any) => action$
  .ofType(types.EMPLOYEES_DELETE_API_CALL)
  .switchMap((action: any) => Observable.of({ type: types.EMPLOYEES_DELETE_START })
    .concat(
      Observable
        .fromPromise(invokeAPI('delete', withBaseUrl(`${EMPLOYEES}/${action.id}`)))
        .map((_: any) => deleteEmployeesSuccess(action.id))
        .catch((error: any) => Observable.of({ type: types.EMPLOYEES_DELETE_ERROR, error })),
    ));
