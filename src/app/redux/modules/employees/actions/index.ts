import { IEmployee } from '../../../../models/IEmployee';
import types from '../types';

export interface IEmployeesActions {
  fetchEmployees(): any;
  createEmployees(employees: IEmployee): any;
  updateEmployees(employees: IEmployee, id: number): any;
  deleteEmployees(id: number): any;
}

/**
 * Fetch all employees (epic initiator)
 * @returns {any}
 */
export const fetchEmployees = (): any => ({
  type: types.EMPLOYEES_FETCH_API_CALL});

/**
 * fetch employees successfully
 * @param {IEmployee[]} employees
 * @returns {any}
 */
export const fetchEmployeesSuccess = (employees: IEmployee[]): any => ({
  type: types.EMPLOYEES_FETCH_SUCCESS,
  employees: employees.reduce((acc: any, em: IEmployee) => ({...acc, [em.id]: em}), {}),
});

/**
 * create employees (epic init)
 * @param {IEmployee} employees
 * @returns {any}
 */
export const createEmployees = (employees: IEmployee): any => ({
  type: types.EMPLOYEES_CREATE_API_CALL, employees});

/**
 * employees was created successfully
 * @param {IEmployee} employees
 * @returns {any}
 */
export const createEmployeesSuccess = (employees: IEmployee): any => {
  return (dispatch: any) => {
    dispatch({type: types.EMPLOYEES_CREATE_SUCCESS, employees});
    dispatch(fetchEmployees());
  };
};

/**
 * Update employees (epic)
 * @param {IEmployee} employees
 * @param {number} id
 * @returns {any}
 */
export const updateEmployees = (employees: IEmployee, id: number): any => ({
  type: types.EMPLOYEES_UPDATE_API_CALL, employees, id});

/**
 * update successfully
 * @param {IEmployee} employees
 * @returns {any}
 */
export const updateEmployeesSuccess = (employees: IEmployee): any => {
  return (dispatch: any) => {
    dispatch({ type: types.EMPLOYEES_UPDATE_SUCCESS, employees });
    dispatch(fetchEmployees());
  };
};

/**
 * delete employees (epic initiator)
 * @param {number} id
 * @returns {any}
 */
export const deleteEmployees = (id: number): any => ({type: types.EMPLOYEES_DELETE_API_CALL, id});

/**
 * deleted successfully
 * @param {number} id
 * @returns {any}
 */
export const deleteEmployeesSuccess = (id: number): any => {
  return (dispatch: any) => {
    dispatch({type: types.EMPLOYEES_DELETE_SUCCESS, id});
    dispatch(fetchEmployees());
  };
};
