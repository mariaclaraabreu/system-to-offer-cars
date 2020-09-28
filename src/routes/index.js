import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import RegisterOffer from '../pages/RegisterOffer';
import Administration from '../pages/Administration';
import Offers from '../pages/Offers';

const Routes = () => (
  <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/newoffer' component={RegisterOffer} />
      <Route path='/administration' component={Administration} />
      <Route path='/offers' component={Offers} />
  </Switch>
);

export default Routes;