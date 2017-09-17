/**
 * IEmployee interface entity
 */
export interface IEmployee {
  id?: number;
  firstName: string;
  lastName: string;
  departmentId: number;
}

export interface IEmployeesHashMap {
  [id: string]: IEmployee;
}
