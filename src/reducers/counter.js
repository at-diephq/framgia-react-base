import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants/ActionTypes';
import CounterModel from '../models/CounterModel';

const initialState = new CounterModel();

function counterReducer(state = initialState, { type }) {
  switch (type) {
    case COUNTER_INCREMENT:
      return state.increment();
    case COUNTER_DECREMENT:
      return state.decrement();
    default:
      return state;
  }
}

export default counterReducer;
