import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as employeesActions from '../redux/modules/employees/actions';
import { PageHeader } from '../components/layout/PageHeader';

export interface IMappedProps {
  actions: employeesActions.IEmployeesActions;
  departments: any;
}

/**
 * Employees page container
 */
class Employees extends React.PureComponent<IMappedProps, {}> {
  public componentDidMount() {
    this.props.actions.fetchEmployees();
  }

  public render() {
    return (
      <div className="content">
        <PageHeader title={'Employees management'}/>
        <section className="content">
          <p>not implemented yet</p>
        </section>
      </div>
    );
  }
}

function mapProps(state: any): any {
  return state;
}

function mapDispatchToProps(dispatch: any): any {
  return {
    actions: bindActionCreators({...employeesActions}, dispatch),
  };
}

export default connect(mapProps, mapDispatchToProps)(Employees);
