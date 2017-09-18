import { DATA_FETCH_API_CALL, DATA_FETCH_SUCCESS } from '../types';

export interface IDashboardActions {
  fetchStatisticsData(): any;
}

/**
 * Fetch statistics initiator
 */
export const fetchStatisticsData = () => ({type: DATA_FETCH_API_CALL});

/**
 * fetch data success creator
 * @param data
 * @returns {{type: string; employeesTotal: any; departmentsTotal: any}}
 */
export const fetchStatisticsDataSuccess = (data: any) => {
  const departmentsTotal = data.length;
  const employeesTotal = data.map((i: any) => i.employees.length).reduce((acc: number, num: any) => acc + num, 0);
  return {
    type: DATA_FETCH_SUCCESS,
    employeesTotal,
    departmentsTotal,
  };
};
