import React from 'react';
import { Route, IndexRoute } from 'react-router';

import app from './components/app';
import * as pages from './pages';

export default (
  <Route component={app} path='/'>
    <IndexRoute component={pages.home} />
    <Route component={pages.products} path='products' />
    <Route component={pages.solutions} path='solutions' />
    <Route component={pages.demo} path='demo' />
    <Route component={pages.about} path='about' />
    <Route component={pages.lfa} path='lfa' />
    <Route component={pages.lfp} path='lfp' />
    <Route component={pages.contact} path='contact' />
    <Route component={pages.notFound} path="*" />
  </Route>
);

