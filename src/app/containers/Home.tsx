import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PageHeader } from '../components/layout/PageHeader';
import { StatisticsBox } from '../components/dashboard/StatisticsBox';

import * as dashboardActions from '../redux/modules/dashboard/actions';

export interface IProps {
  employeesTotal: number;
  departmentsTotal: number;
}
export interface IMappedProps {
  actions: dashboardActions.IDashboardActions;
}
/**
 * Home page container
 */
class Home extends React.Component<IProps & IMappedProps, {}> {

  public componentDidMount() {
    this.props.actions.fetchStatisticsData();
  }

  public render() {
    const {
      departmentsTotal,
      employeesTotal,
    } = this.props;
    return (
      <div className="content">
        <PageHeader title={'Dashboard'}/>
        <div className="content">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <StatisticsBox bgClass="bg-aqua"
                             value={departmentsTotal.toString()}
                             linkTo={'/departments'} text="Total departments"/>
            </div>
            <div className="col-md-6 col-sm-12">
              <StatisticsBox bgClass="bg-green"
                             value={employeesTotal.toString()}
                             linkTo={'/employees'} text="Total employees"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapProps(state: any): any {
  return state.dashboard;
}

function mapDispatchToProps(dispatch: any): IMappedProps|any {
  return {
    actions: bindActionCreators({...dashboardActions}, dispatch),
  };
}

export default connect(mapProps, mapDispatchToProps)(Home);
