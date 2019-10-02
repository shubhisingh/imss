import { combineReducers } from 'redux';

import { bookReducers } from './books';

const rootReducer = combineReducers({
  bookReducers,
});

export default rootReducer;
