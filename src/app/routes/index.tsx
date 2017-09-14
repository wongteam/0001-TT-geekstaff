import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Departments, Employees } from 'containers';

/**
 * App routes
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/departments" component={Departments} />
    <Route path="/departments/:id" component={Departments} />
    <Route path="/employees" component={Employees} />
    <Route path="/employees/:id" component={Employees} />
  </Route>
);
