import * as React from 'react';
import { get } from 'lodash';

import { IEmployee } from '../../models/IEmployee';
import { IDepartmentHashMap } from '../../models/IDepartment';

export interface IProps {
  employees: IEmployee[];
  departments: IDepartmentHashMap;
  onSelectEmployees(employees: IEmployee): void;
  deleteHandler(id: number): void;
}

const discoverDepartment = (id: number,
                            departments: IDepartmentHashMap): string => get(departments, `${id}.name`, 'N/A');

const formatFullName = (name: string, lastName: string): string => `${name} ${lastName}`;

export class EmployeesTable extends React.PureComponent<IProps, {}> {

  private renderRows = () => {
    const { employees, departments, onSelectEmployees, deleteHandler } = this.props;
    return employees.map((em: IEmployee, i: number) => (
      <tr key={i}>
        <td>{em.id}</td>
        <td>{discoverDepartment(em.departmentId, departments)}</td>
        <td>{formatFullName(em.firstName, em.lastName)}</td>
        <td>
          <button className="btn btn-flat btn-primary btn-xs"
                  type="button" onClick={(_: any) => onSelectEmployees(em)}>
            <i className="fa fa-pencil"/>
          </button>
          <button className="btn btn-flat btn-danger btn-xs"
                  type="button" onClick={(_: any) => deleteHandler(em.id)}>
            <i className="fa fa-remove"/>
          </button>
        </td>
      </tr>
    ));
  }

  public render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>ID</th>
          <th>Department</th>
          <th>Full name</th>
          <th className="text-center">Actions</th>
        </tr>
        </thead>
        <tbody>
        {this.renderRows()}
        </tbody>
      </table>
    );
  }
}
