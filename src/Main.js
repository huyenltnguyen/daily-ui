import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import SignUp from './001-sign-up/SignUp';
import Checkout from './002-checkout/Checkout';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Nav } />
      <Route path='/001-sign-up' component={ SignUp } />
      <Route path='/002-checkout' component={ Checkout } />
    </Switch>
  );
};

export default Main;
