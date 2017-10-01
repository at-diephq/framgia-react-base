import React from 'react';
import { Route } from 'react-router';

import App from './../components/root/App';
import Home from './../components/pages/Home';
import Login from './../components/pages/Login';
import About from './../components/pages/About';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="about" component={About} />
    <Route path="login" component={Login} />
  </Route>
);
