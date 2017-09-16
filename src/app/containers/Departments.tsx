import * as React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { bindActionCreators } from 'redux';

import * as departmentActions from '../redux/modules/department/actions';
import { SimpleBox } from '../components/layout/SimpleBox';
import { PageHeader } from '../components/layout/PageHeader';
import { DepartmentsTable } from '../components/department/DepartmentsTable';
import { DepartmentForm } from '../components/department/DepartmentForm';
export interface IMappedProps {
  actions: departmentActions.IDepartmentActions;
  departments: any;
}

/**
 * Departments page container
 */
class Departments extends React.PureComponent<{} & IMappedProps, {}> {
  public componentDidMount() {
    this.props.actions.fetchDepartments();
  }

  public render() {
    const {
      actions,
      departments,
    } = this.props;
    return (
      <div className="content">
        <PageHeader title={'Departments management'}/>
        <section className="content">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <SimpleBox title="Add a new department" noPadding={false}>
                <DepartmentForm onSubmit={actions.createDepartment}/>
              </SimpleBox>
            </div>
          </div>

          <SimpleBox title="Departments list" noPadding={true}>
            <DepartmentsTable data={departments}
                              removeHandler={actions.deleteDepartment}
                              updateHandler={actions.updateDepartment} />
          </SimpleBox>
        </section>
      </div>
    );
  }
}

function mapProps(state: any): any {
  return {
    departments: values(state.departments.departments),
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    actions: bindActionCreators({...departmentActions}, dispatch),
  };
}

export default connect(mapProps, mapDispatchToProps)(Departments);
