import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore, { history } from './setup/store';
import App from './components/root/App';

const rootApp = require('./components/root/App');

const store = configureStore();

const rootNode = document.getElementById('app');

function render(RootApp = App) {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RootApp />
        </ConnectedRouter>
      </Provider>
    </AppContainer>
  ), rootNode);
}

render();

if (module.hot) {
  module.hot.accept('./components/root/App', () => {
    const nextApp = rootApp.default;
    render(nextApp);
  });
}
