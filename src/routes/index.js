import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import RegisterOffer from '../pages/RegisterOffer';
import Administration from '../pages/Administration';

const Routes = () => (
  <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/newoffer' component={RegisterOffer} />
      <Route path='/administration' component={Administration} />
  </Switch>
);

export default Routes;