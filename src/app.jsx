import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import uuid from 'uuid/v4';

import createReducer from './setup/reducer';
import configureStore from './setup/store';
import routes from './routes';

const reducer = createReducer();
const store = configureStore(reducer);
import 'bootstrap/dist/css/bootstrap.css';

const appContainer = document.getElementById('app');

function render() {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <Router
          key={uuid()}
          routes={routes}
          history={browserHistory}
        />
      </Provider>
    </AppContainer>
  ), appContainer);
}

render();

if (module.hot) {
  module.hot.accept();
}
