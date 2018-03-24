import * as API from '../utils/api';

//
// Actions
//

// Categories
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

// Posts
export const GET_POST = 'GET_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';
export const SET_POST_TO_EDIT = 'SET_POST_TO_EDIT';

// Comments
export const GET_COMMENTS = 'GET_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';
export const SET_COMMENT_TO_EDIT = 'SET_COMMENT_TO_EDIT';

// Filters/Sorts
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

//
// Category
//
export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories,
  category: { name: 'all', path: 'all' }
});

export const fetchCategories = () => dispatch => (
  API
    .getCategories()
    .then(data => dispatch(getCategories(data)))
);

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
});

//
// Post
//
export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  API
    .getPosts()
    .then(data => dispatch(getPosts(data)))
);

export const filterPostsByCategory = (category = 'all') => ({
  type: FILTER_BY_CATEGORY,
  category
});

