import { IDepartment } from '../../../../models/IDepartment';
import types from '../types';

/**
 * Interface for define types in components that will use this action creators
 */
export interface IDepartmentActions {
  fetchDepartments(): any;
  fetchDepartment(id: number): any;
  createDepartment(department: IDepartment): any;
  updateDepartment(department: IDepartment): any;
  deleteDepartment(id: number): any;
}

/**
 * Fetch all departments. Just action generation for epic
 * @returns {any}
 */
export const fetchDepartments = (): any => ({
  type: types.DEPARTMENTS_FETCH_API_CALL});

/**
 * success fetch departments
 * @param {IDepartment[]} departments
 * @returns {any}
 */
export const fetchDepartmentsSuccess = (departments: IDepartment[]): any => ({
  type: types.DEPARTMENTS_FETCH_SUCCESS,
  departments: departments.reduce((acc: any, curr: IDepartment) => ({...acc, [curr.id]: {...curr}}), {}),
});

/**
 * Fetch single department by id
 * @param {number} id
 * @returns {any}
 */
export const fetchDepartment = (id: number): any => ({
  type: types.DEPARTMENT_FETCH_API_CALL, id});

/**
 * Success fetch single department
 * @param {IDepartment} department
 * @returns {any}
 */
export const fetchDepartmentSuccess = (department: IDepartment): any => ({
  type: types.DEPARTMENT_FETCH_SUCCESS, department});

export const createDepartment = (department: IDepartment): any => ({
  type: types.DEPARTMENTS_CREATE_API_CALL, department});

export const createDepartmentSuccess = (department: IDepartment): any => ({
  type: types.DEPARTMENTS_CREATE_SUCCESS, department});

export const updateDepartment = (department: IDepartment): any => ({
  type: types.DEPARTMENTS_UPDATE_API_CALL, department});

export const updateDepartmentSuccess = (department: IDepartment): any => ({
  type: types.DEPARTMENTS_UPDATE_SUCCESS, department});

export const deleteDepartment = (id: number): any => ({
  type: types.DEPARTMENTS_DELETE_API_CALL, id});

export const deleteDepartmentSuccess = (): any => ({
  type: types.DEPARTMENTS_DELETE_SUCCESS});
