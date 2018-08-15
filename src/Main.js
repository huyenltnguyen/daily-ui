import React from 'react';
import { Route } from 'react-router-dom';

const Main = () => {
  return (
    <Route path='/001-sign-up' component={ SignUp } />
  );
};

export default Main;
