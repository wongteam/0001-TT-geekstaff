// import { IDepartment } from '../models/IDepartment';
// import { IEmployee } from '../models/IEmployee';

export interface IStore {
  // commonly way
  // departments: IDepartment[];
  // employees: IEmployee;
  departments: {}; // hash map IDepartments
  employees: {}; // hash map IEmployee
}
