export const BASE_URL = 'http://localhost:3005/api/v1';
export const DEPARTMENTS = 'departments';
export const EMPLOYEES = 'employees';

export const withBaseUrl = (resource: string): string => `${BASE_URL}/${resource}`;
