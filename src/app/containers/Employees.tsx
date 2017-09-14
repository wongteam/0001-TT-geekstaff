import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PageHeader } from '../components/layout/PageHeader';

/**
 * Employees page container
 */
class Employees extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="content">
        <PageHeader title={'Employees management'}/>
      </div>
    );
  }
}

function mapProps(state: any): any {
  return state;
}

function mapDispatchToProps(dispatch: any): any {
  return bindActionCreators({}, dispatch);
}

export default connect(mapProps, mapDispatchToProps)(Employees);
