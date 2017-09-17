import { DATA_FETCH_API_CALL, DATA_FETCH_SUCCESS } from '../types';

export interface IDashboardActions {
  fetchStatisticsData(): any;
}

export const fetchStatisticsData = () => ({type: DATA_FETCH_API_CALL});

export const fetchStatisticsDataSuccess = (data: any) => {
  const departmentsTotal = data.length;
  const employeesTotal = data.map((i: any) => i.employees.length).reduce((acc: number, num: any) => acc + num, 0);
  return {
    type: DATA_FETCH_SUCCESS,
    employeesTotal,
    departmentsTotal,
  };
};
