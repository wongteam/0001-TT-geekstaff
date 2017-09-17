import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { values, get } from 'lodash';

import * as employeesActions from '../redux/modules/employees/actions';
import * as departmentsActions from '../redux/modules/department/actions';
import { PageHeader } from '../components/layout/PageHeader';
import { SimpleBox } from '../components/layout/SimpleBox';
import { ModalBox } from '../components/layout/ModalBox';
import { EmployeesTable } from '../components/employees/EmployeesTable';
import { EmployeesForm } from '../components/employees/EmployeesForm';
import { IEmployee } from '../models/IEmployee';
import { IDepartmentHashMap } from '../models/IDepartment';

const formatModalTitle = (emp: IEmployee): string => `${get(emp, 'firstName', '')} ${get(emp, 'lastName', 0)}`;

export interface IProps {
  employees: IEmployee[];
  departments: IDepartmentHashMap;
}

export interface IMappedProps {
  employeesActions: employeesActions.IEmployeesActions;
  departmentsActions: departmentsActions.IDepartmentActions;
  departments: any;
}

export interface IState {
  selectedEmployees: IEmployee;
  editModalIsOpen: boolean;
}

/**
 * Employees page container
 */
class Employees extends React.PureComponent<IProps & IMappedProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      selectedEmployees: null,
      editModalIsOpen: false,
    };
  }
  public componentDidMount() {
    this.props.departmentsActions.fetchDepartments();
    this.props.employeesActions.fetchEmployees();
  }
  private closeEditModal = () => this.setState({...this.state, editModalIsOpen: false, selectedEmployees: null});

  private selectEmployees = (employees: IEmployee) => {
    this.setState({...this.state, selectedEmployees: employees, editModalIsOpen: true});
  }

  private createEmployees = (employees: IEmployee) => {
    this.closeEditModal();
    this.props.employeesActions.createEmployees(employees);
  }

  private updateEmployees = (employees: IEmployee) => {
    this.closeEditModal();
    this.props.employeesActions.updateEmployees(employees, this.state.selectedEmployees.id);
  }

  public render() {
    const {
      employees,
      departments,
      employeesActions,
    } = this.props;

    const {
      selectedEmployees,
      editModalIsOpen,
    } = this.state;

    return (
      <div className="content">
        <PageHeader title={'Employees management'}/>
        <section className="content">
          <div className="row">
            <div className="col-md-6 col-md-12">
              <SimpleBox title="Employees form" noPadding={false}>
                <EmployeesForm departments={departments} onSubmit={this.createEmployees}/>
              </SimpleBox>
            </div>
            <div className="col-md-6 col-md-12">
              <SimpleBox title="Employees list" noPadding={true}>
                <EmployeesTable employees={employees}
                                departments={departments}
                                onSelectEmployees={this.selectEmployees}
                                deleteHandler={employeesActions.deleteEmployees}
                />
              </SimpleBox>
            </div>
          </div>

          <ModalBox isOpen={editModalIsOpen}
                    title={`Edit ${formatModalTitle(selectedEmployees)}`}
                    closeHandler={this.closeEditModal}
          >
            <EmployeesForm departments={departments}
                           employees={selectedEmployees}
                           cancelHandler={this.closeEditModal}
                           withCancelButton={true}
                           onSubmit={this.updateEmployees}
            />
          </ModalBox>
        </section>
      </div>
    );
  }
}

function mapProps(state: any): any {
  return {
    employees: values(state.employees.employees),
    departments: state.departments.departments,
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    employeesActions: bindActionCreators({...employeesActions}, dispatch),
    departmentsActions: bindActionCreators({...departmentsActions}, dispatch),
  };
}

export default connect(mapProps, mapDispatchToProps)(Employees);
