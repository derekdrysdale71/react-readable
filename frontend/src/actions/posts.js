import * as API from '../utils/api';
import { GET_POST, GET_POSTS, CREATE_POST, EDIT_POST, DELETE_POST } from './types';

export const getPost = post => ({
  type: GET_POST,
  post
});

export const fetchPost = id => dispatch => (
  API
    .getPost(id)
    .then(data => dispatch(getPost(data)))
);

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  API
    .getPosts()
    .then(data => dispatch(getPosts(data)))
);

export const addPost = post => ({
  type: CREATE_POST,
  post
});

export const createPost = post => dispatch => (
  API
    .createPost(post)
    .then(data => dispatch(addPost(data)))
);

export const editPost = post => ({
  type: EDIT_POST,
  post
});

export const updatePost = post => dispatch => (
  API
    .editPost(post)
    .then(data => dispatch(editPost(data)))
);

export const deletePost = id => ({
  type: DELETE_POST,
  id
});

export const removePost = post => dispatch => (
  API
    .deletePost(post)
    .then(dispatch(deletePost(post)))
);
