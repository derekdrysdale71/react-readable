import * as API from '../utils/api';
import { GET_COMMENTS, CREATE_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from './types';

export const getComments = (parentId, comments) => ({
  type: GET_COMMENTS,
  parentId,
  comments
});

export const fetchComments = parentId => dispatch => (
  API
    .getComments(parentId)
    .then(data => dispatch(getComments(parentId, data)))
);

export const addComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const createComment = comment => dispatch => (
  API
    .createComment(comment)
    .then(data => dispatch(addComment(data)))
);

export const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
});

export const updateComment = comment => dispatch => (
  API
    .editComment(comment.id, comment.body)
    .then(data => dispatch(editComment(data)))
);

export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const removeComment = comment => dispatch => (
  API
    .deleteComment(comment.id)
    .then(dispatch(deleteComment(comment)))
);
