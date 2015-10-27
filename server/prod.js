import React from 'react';
import { RoutingContext, match } from 'react-router';
import { createMemoryHistory } from 'history';
import fs from 'fs';
import express from 'express';
import sm from 'sitemap';

import routes from '../routes';

const app = express();

const urls = [];

function sh(sub) {
  if (sub.items) {
    sub.items.forEach(sh);
  } else {
    urls.push({
      url: sub.to,
      changefreq: 'daily',
    });
  }
}

routes.props.menu.forEach(menuItem => sh(menuItem) );


const template = fs.readFileSync('./server-dist/index.html').toString();
const history = createMemoryHistory();
const sitemap = sm.createSitemap({
  hostname: 'http://learnfwd.com',
  cacheTime: 600000,
  urls: urls,
});

app.use(express.static('./dist', {index: false}));

app.get('/sitemap.xml', (req, res) => {
  sitemap.toXML((err, xml) => {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});

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
      res.send(template.replace('Petting cats...', content));
    }
  });
});

const server = app.listen(process.env.PORT || 5392, () => {
  const { host, port } = server.address();
  console.log('App listening at http://%s:%s', host || 'localhost', port);
});

