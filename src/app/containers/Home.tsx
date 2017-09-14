import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PageHeader } from '../components/layout/PageHeader';
/**
 * Home page container
 */
class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="content">
        <PageHeader title={'Dashboard'}/>
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
