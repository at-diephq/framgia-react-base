import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore, { history } from './setup/store';
import App from './components/root/App';

const store = configureStore();

const rootNode = document.getElementById('app');

function render() {
  ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  ), rootNode);
}

render();
