import { GET_COMMENTS } from '../actions';
import { VOTE_COMMENT } from '../actions/vote';

export default (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return [
        ...action.comments
      ];
    case VOTE_COMMENT:
      return state.map(comment =>
        ((comment.id === action.comment.id)
          ? { ...comment, voteScore: action.comment.voteScore }
          : comment));
    default:
      return state;
  }
};
