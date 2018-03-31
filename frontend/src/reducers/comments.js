import { GET_COMMENTS, CREATE_COMMENT, EDIT_COMMENT, DELETE_COMMENT, VOTE_COMMENT } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return [
        ...action.comments
      ];
    case CREATE_COMMENT:
      return state.concat(action.comment);
    case EDIT_COMMENT:
      return state.map(comment =>
        (comment.id === action.comment.id)
          ? {
            ...comment,
            body: action.comment.body,
            timestamp: action.comment.timestamp
          }
          : comment
      );
    case DELETE_COMMENT:
      return state.filter(comment => (comment.id !== action.comment.id));
    case VOTE_COMMENT:
      return state.map(comment =>
        ((comment.id === action.comment.id)
          ? { ...comment, voteScore: action.comment.voteScore }
          : comment));
    default:
      return state;
  }
};
