import * as React from 'react';
import { IDepartment } from '../../models/IDepartment';

export interface IProps {
  data: IDepartment[];
  removeHandler(id: number): void;
  updateHandler(department: IDepartment): void;
}

export interface IState {
  selectedDepartment: IDepartment;
}

class DepartmentsTable extends React.PureComponent<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedDepartment: null,
    };
  }

  private selectDepartment = (department: IDepartment) => {
    this.setState({
      ...this.state,
      selectedDepartment: department,
    });
  }

  private renderRows = (data: IDepartment[]): any[] => {
    const { removeHandler } = this.props;
    return data.map((d: IDepartment, i: number) => (
      <tr key={i}>
        <td>{d.id}</td>
        <td>{d.name}</td>
        <td className="text-center">
          <button type="button" className="btn btn-flat btn-primary btn-xs"
                  onClick={(_: any) => this.selectDepartment(d)}>
            <i className="fa fa-pencil"/>
          </button>
          <button type="button" className="btn btn-flat btn-danger btn-xs"
                  onClick={(_: any) => removeHandler(d.id)}>
            <i className="fa fa-remove"/>
          </button>
        </td>
      </tr>
    ));
  }

  public render() {
    const { data } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows(data)}
        </tbody>
      </table>
    );
  }
}

export { DepartmentsTable }
