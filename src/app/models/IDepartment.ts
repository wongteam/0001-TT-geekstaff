/**
 * Department interface entity
 */
export interface IDepartment {
  id: number;
  name: string;
}

export interface IDepartmentHashMap {
  [id: string]: IDepartment;
}
