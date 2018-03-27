import { GET_POST, GET_POSTS, CREATE_POST, DELETE_POST } from '../actions';
import { VOTE_POST } from '../actions/vote';

const defaultPostsState = {
  posts: [],
  post: {}
};

export default (state = defaultPostsState, action) => {
  const { posts } = state;
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case GET_POST:
      return {
        ...state,
        post: { ...action.post }
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: posts.filter(post => (post.id !== action.id))
      };
    case VOTE_POST:
      return {
        ...state,
        posts: posts.map(post =>
          ((post.id === action.post.id)
            ? { ...post, voteScore: action.post.voteScore }
            : post)),
        post: { ...state.post, voteScore: action.post.voteScore }
      };
    default:
      return state;
  }
};
