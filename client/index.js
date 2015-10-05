import React from 'react';
import { Router } from 'react-router';
import { createHistory } from 'history';

import routes from '../routes';

React.render( <Router history={createHistory()} routes={routes}/>, document.getElementById('lfwd'));
window.React = React;

