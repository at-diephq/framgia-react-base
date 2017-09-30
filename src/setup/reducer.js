import { combineReducers } from 'redux-immutable';

const reducers = {
  null: function() { return {}}
};

function createReducer() {
  return combineReducers(reducers);
}

export default createReducer;
