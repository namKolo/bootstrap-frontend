import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SamplePage from './pages/sample';

const Routes: React.SFC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SamplePage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </Router>
);

export default Routes;
