import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Home page container
 */
class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <h1>Home</h1>
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

export default connect(mapProps, mapDispatchToProps)(Home);
