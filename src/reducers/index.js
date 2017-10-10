import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import postReducer from './posts/index';

const rootReducer = combineReducers({
  routing: routerReducer,
  login: () => ({
    id: 1,
    email: 'test@gmail.com'
  }),
  postReducer,
});

export default rootReducer;
