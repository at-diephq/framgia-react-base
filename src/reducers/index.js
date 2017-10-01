import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  login: () => ({
    id: 1,
    email: 'test@gmail.com',
  }),
});

export default rootReducer;
