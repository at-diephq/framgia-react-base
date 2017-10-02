import { createStore, applyMiddleware, compose } from 'redux';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './../reducers';

export const history = createHistory();

function configureStore() {
  const reactRouterMiddleware = routerMiddleware(history);

  const middlewares = [
    // reduxImmutableStateInvariant(),
    thunk,
    reactRouterMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

  // if (module.hot) {
  //   module.hot.accept('./reducer', () => {
  //     const nextReducer = rootReducer.default;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}

export default configureStore;
