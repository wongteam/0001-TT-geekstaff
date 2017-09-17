import { IEmployee } from '../../../../models/IEmployee';
import types from '../types';

export interface IEmployeesActions {
  fetchEmployees(): any;
  createEmployees(employees: IEmployee): any;
  updateEmployees(employees: IEmployee): any;
  deleteEmployees(id: number): any;
}

export const fetchEmployees = (): any => ({
  type: types.EMPLOYEES_FETCH_API_CALL});

export const fetchEmployeesSuccess = (employees: IEmployee[]): any => ({
  type: types.EMPLOYEES_FETCH_SUCCESS,
  employees: employees.reduce((acc: any, em: IEmployee) => ({...acc, [em.id]: em})),
});

export const createEmployees = (employees: IEmployee): any => ({
  type: types.EMPLOYEES_CREATE_API_CALL, employees});

export const createEmployeesSuccess = (employees: IEmployee): any => ({
  type: types.EMPLOYEES_CREATE_SUCCESS, employees});

export const updateEmployees = (employees: IEmployee): any => ({
  type: types.EMPLOYEES_UPDATE_API_CALL, employees});

export const updateEmployeesSuccess = (employees: IEmployee): any => ({
  type: types.EMPLOYEES_UPDATE_SUCCESS, employees});

export const deleteEmployees = (id: number): any => ({type: types.EMPLOYEES_DELETE_API_CALL, id});

export const deleteEmployeesSuccess = (id: number): any => ({type: types.EMPLOYEES_DELETE_SUCCESS, id});
