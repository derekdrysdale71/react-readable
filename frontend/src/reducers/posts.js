import { GET_POST, GET_POSTS, CREATE_POST, EDIT_POST, DELETE_POST, CREATE_COMMENT, DELETE_COMMENT } from '../actions';
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
    case EDIT_POST:
      return {
        ...state,
        posts: posts.map((post) => {
          if (post.id === action.post.id) {
            return action.post;
          }
          return post;
        }),
        post: action.post
      };
    case DELETE_POST:
      return {
        ...state,
        posts: posts.filter(post => (post.id !== action.id))
      };
    case CREATE_COMMENT:
      return {
        ...state,
        posts: posts.map(post =>
          ((post.id === action.comment.parentId)
            ? { ...post, commentCount: post.commentCount += 1 }
            : post))
      };
    case DELETE_COMMENT:
      return {
        ...state,
        posts: posts.map(post =>
          ((post.id === action.comment.parentId)
            ? { ...post, commentCount: post.commentCount -= 1 }
            : post)),
        post: {
          ...state.post,
          commentCount: state.post.commentCount -= 1
        }
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
