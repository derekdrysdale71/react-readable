import * as API from '../utils/api';
import { VOTE_POST, VOTE_COMMENT } from './types';

// Actions
export const votePost = post => ({
  type: VOTE_POST,
  post,
});

export const voteComment = comment => ({
  type: VOTE_COMMENT,
  comment,
});

// API Call
export const vote = (type, id, option) => dispatch => (
  type === 'post'
    ? API.votePost(id, option).then(data => dispatch(votePost(data)))
    : API.voteComment(id, option).then(data => dispatch(voteComment(data)))
);
