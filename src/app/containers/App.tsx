import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SideBar } from '../components/layout/Sidebar';

const SIDEBAR_MENU_ITEMS = [
  {text: 'Departments', urlPath: '/departments'},
  {text: 'Employees', urlPath: '/employees'},
];
/**
 * Application container
 */
class App extends React.Component<{}, {}> {
  public render() {
    const { children } = this.props;
    return (
      <div>
        <SideBar menuItems={SIDEBAR_MENU_ITEMS}/>
        <div className="content-wrapper" style={{height: '100vh'}}>
          {children}
        </div>
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
