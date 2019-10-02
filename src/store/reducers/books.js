import { bookConstants } from '../constants';

const initState = {
  books: [],
  currPage: 1,
};

const bookReducers = (state = initState, action) => {
  // console.log('reducer',state,action);
  switch (action.type) {
    case bookConstants.GET:
      return {
        ...state,
        currPage: (action.payload.page+1),
        books: [ ...state.books, ...action.payload.books ]
      };
    default:
      return state;
  }
};

export { bookReducers };
