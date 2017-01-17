import { FETCH_POSTS, LOAD_POST } from '../actions/types';

const INITIAL_STATE = { all: [], post: null};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_POST:
      return { ...state, post: action.payload.data}
    case FETCH_POSTS:
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}
