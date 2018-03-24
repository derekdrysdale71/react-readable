import { GET_POSTS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return [
        ...state,
        ...action.posts
      ];
    default:
      return state;
  }
};
