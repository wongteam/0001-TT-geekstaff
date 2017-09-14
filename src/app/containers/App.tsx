import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Application container
 */
class App extends React.Component<{}, {}> {
  public render() {
    const { children } = this.props;
    return (
      <div>
        <h1>app</h1>
        {children}
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

export default connect(mapProps, mapDispatchToProps)(App);
