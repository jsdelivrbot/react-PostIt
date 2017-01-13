import { FETCH_POSTS } from '../actions/types';

const INITIAL_STATE = { all: [], post: null};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
    // console.log(action.payload.data);
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}
