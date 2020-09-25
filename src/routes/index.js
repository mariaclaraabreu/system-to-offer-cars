import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import RegisterOffer from '../pages/RegisterOffer';

const Routes = () => (
  <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/newoffer' component={RegisterOffer} />
  </Switch>
);

export default Routes;