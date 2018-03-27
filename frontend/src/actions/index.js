import * as API from '../utils/api';

//
// Actions
//

// Categories
export const GET_CATEGORIES = 'GET_CATEGORIES';

// Posts
export const GET_POST = 'GET_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_POST_TO_EDIT = 'SET_POST_TO_EDIT';

// Comments
export const GET_COMMENTS = 'GET_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const SET_COMMENT_TO_EDIT = 'SET_COMMENT_TO_EDIT';

//
// Category
//
export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories,
});

export const fetchCategories = () => dispatch => (
  API
    .getCategories()
    .then(data => dispatch(getCategories(data)))
);

//
// Post
//
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

export const deletePost = post => ({
  type: DELETE_POST,
  post
});

export const removePost = post => dispatch => (
  API
    .deletePost(post)
    .then(dispatch(deletePost(post)))
);

//
// Comment
//
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
