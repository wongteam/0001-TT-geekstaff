import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as departmentActions from '../redux/modules/department/actions';

import { PageHeader } from '../components/layout/PageHeader';

export interface IMappedProps {
  actions: departmentActions.IDepartmentActions;
}

/**
 * Departments page container
 */
class Departments extends React.PureComponent<{} & IMappedProps, {}> {
  public componentDidMount() {
    this.props.actions.fetchDepartments();
  }

  public render() {
    return (
      <div className="content">
        <PageHeader title={'Departments management'}/>
      </div>
    );
  }
}

function mapProps(state: any): any {
  return state;
}

function mapDispatchToProps(dispatch: any): any {
  return {
    actions: bindActionCreators({...departmentActions}, dispatch),
  };
}

export default connect(mapProps, mapDispatchToProps)(Departments);
