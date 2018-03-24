import { GET_POSTS } from '../actions';
import { VOTE_POST } from '../actions/vote';

export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case GET_POSTS:
      return [
        ...state,
        ...action.posts
      ];
    case VOTE_POST:
      return {
        ...state
      };
    default:
      return state;
  }
};
