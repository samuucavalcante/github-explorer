import React from 'react';

import { Switch, Route } from 'react-router-dom';

import GlobalStyles from '../styles/global';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <>
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" exact component={Repository} />
  </Switch>
  <GlobalStyles />
  </>
  )


export default Routes;