import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createHistory } from 'history';

import routes from '../routes';

ReactDOM.render( <Router history={createHistory()} onUpdate={() => window.scrollTo(0, 0)} routes={routes}/>, document.getElementById('lfwd'));
window.React = React;

