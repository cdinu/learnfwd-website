import React from 'react';
import { RoutingContext, match } from 'react-router';
import { createMemoryHistory } from 'history';
import fs from 'fs';
import express from 'express';

import routes from '../routes';

const app = express();

const template = fs.readFileSync('./index.html').toString();
const history = createMemoryHistory();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const location = history.createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.send(500, error.message);
    } else if (renderProps === null) {
      res.send(404, 'Not found');
    } else {
      const content = React.renderToString(<RoutingContext {...renderProps}/>);
      res.send(template.replace('Please wait...', content));
    }
  });
});

const server = app.listen(3000, () => {
  const { host, port } = server.address();
  console.log('App listening at http://%s:%s', host, port);
});

