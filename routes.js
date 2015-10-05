import React from 'react';
import { Route, IndexRoute } from 'react-router';

import app from './components/app';
import * as pages from './pages';

export default (
  <Route component={app} path='/'>
    <IndexRoute component={pages.home} />
    <Route component={pages.about} path='about' />
    <Route component={pages.notFound} path="*" />
  </Route>
);

