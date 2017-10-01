import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './../../../styles/app.scss';

import Header from './../../organisms/Header';
import HomePage from './../../pages/Home';
import LoginPage from './../../pages/Login';
import AboutPage from './../../pages/About';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
