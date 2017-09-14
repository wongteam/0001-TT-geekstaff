import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Employees page container
 */
class Employees extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div>
        <h1>employees</h1>
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
