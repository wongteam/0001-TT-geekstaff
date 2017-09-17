// department's epic
import { Observable } from 'rxjs';

import { DEPARTMENTS, withBaseUrl } from '../../../constants/api-endpoints';
import { invokeAPI } from '../../../utils/api-invoker';
import types from './types';
import {
  fetchDepartmentsSuccess,
  fetchDepartmentSuccess,
  createDepartmentSuccess,
  updateDepartmentSuccess,
  deleteDepartmentSuccess,
} from './actions';
import {IDepartment} from '../../../models/IDepartment';

/**
 * fetch departments
 * @param action$
 */
export const fetchDepartments = (action$: any) => action$
  .ofType(types.DEPARTMENTS_FETCH_API_CALL)
  .debounceTime(1000)
  .switchMap((_: any) => Observable.of({ type: types.DEPARTMENT_FETCH_START })
    .concat(
      Observable
        .fromPromise(invokeAPI('get', withBaseUrl(DEPARTMENTS)))
        // response will transformed later in action creator
        // .reduce((acc: any, cur: IDepartment, _: number): any => ({...acc, [cur.id]: {...cur}}), {})
        .map((response: IDepartment[]) => fetchDepartmentsSuccess(response))
        .catch((error: any) => Observable.of({ type: types.DEPARTMENTS_FETCH_ERROR, error })),
    ));

/**
 * Fetch single department
 * This epic won't use in current version
 * @param action$
 */
export const fetchDepartment = (action$: any) => action$
  .ofType(types.DEPARTMENT_FETCH_API_CALL)
  .debounceTime(1000)
  .switchMap((action: any) => Observable.of({ type: types.DEPARTMENT_FETCH_START })
    .concat(
      Observable
        .fromPromise(invokeAPI('get', withBaseUrl(`${DEPARTMENTS}/${action.id}`)))
        .map((department: IDepartment) => fetchDepartmentSuccess(department))
        .catch((error: any) => Observable.of({ type: types.DEPARTMENT_FETCH_ERROR, error })),
    ));

/**
 * Create a new department
 * @param action$
 */
export const createDepartment = (action$: any) => action$
  .ofType(types.DEPARTMENTS_CREATE_API_CALL)
  .switchMap((action: any) => Observable.of({ type: types.DEPARTMENTS_CREATE_START })
    .concat(
      Observable
        .fromPromise(invokeAPI('post', withBaseUrl(DEPARTMENTS), action.department))
        .map((department: IDepartment) => createDepartmentSuccess(department))
        .catch((error: any) => Observable.of({ type: types.DEPARTMENTS_CREATE_ERROR, error })),
    ));

/**
 * Update department
 * @param action$
 */
export const updateDepartment = (action$: any) => action$
  .ofType(types.DEPARTMENTS_UPDATE_API_CALL)
  .switchMap((action: any) => Observable.of({ type: types.DEPARTMENTS_UPDATE_START })
    .concat(
      Observable
        .fromPromise(invokeAPI('put', withBaseUrl(`${DEPARTMENTS}/${action.department.id}`), action.department))
        .map((department: IDepartment) => updateDepartmentSuccess(department))
        .catch((error: any) => Observable.of({ type: types.DEPARTMENTS_UPDATE_ERROR, error })),
    ));

/**
 * Delete a department
 * @param action$
 */
export const deleteDepartment = (action$: any) => action$
  .ofType(types.DEPARTMENTS_DELETE_API_CALL)
  .switchMap((action: any) => Observable.of({ type: types.DEPARTMENTS_DELETE_START })
    .concat(
      Observable
        .fromPromise(invokeAPI('delete', withBaseUrl(`${DEPARTMENTS}/${action.id}`)))
        .map((_: any) => deleteDepartmentSuccess())
        .catch((error: any) => Observable.of({ type: types.DEPARTMENTS_DELETE_ERROR, error })),
    ));
