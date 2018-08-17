import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import SignUp from './001-sign-up/SignUp';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Nav } />
      <Route path='/001-sign-up' component={ SignUp } />
    </Switch>
  );
};

export default Main;
