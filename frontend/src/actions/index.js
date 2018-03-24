import * as API from '../utils/api';

// Actions
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const GET_POST = 'GET_POST';
export const GET_COMMENTS = 'GET_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const SORT_BY_POSTS = 'SORT_BY_POSTS';
export const SET_COMMENT_TO_EDIT = 'SET_COMMENT_TO_EDIT';
export const SET_POST_TO_EDIT = 'SET_POST_TO_EDIT';

// Filters
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const SORT_BY_TIMESTAMP_DESC = 'SORT_BY_TIMESTAMP_DESC';
export const SORT_BY_TIMESTAMP_ASC = 'SORT_BY_TIMESTAMP_ASC';
export const SORT_BY_VOTESCORE_DESC = 'SORT_BY_VOTESCORE_DESC';
export const SORT_BY_VOTESCORE_ASC = 'SORT_BY_VOTESCORE_ASC';

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

export const sortByTimestameDesc = () => ({
  type: SORT_BY_TIMESTAMP_DESC,
});

export const sortByTimestameAsc = () => ({
  type: SORT_BY_TIMESTAMP_ASC,
});

export const sortByVoteScoreDesc = () => ({
  type: SORT_BY_VOTESCORE_DESC,
});

export const sortByVoteScoreAsc = () => ({
  type: SORT_BY_VOTESCORE_ASC,
});

export const getPostsByCategory = posts => ({
  type: GET_POSTS_BY_CATEGORY,
  posts
});

export const fetchPostsByCategory = category => dispatch => (
  API
    .getPostsByCategory(category)
    .then(data => dispatch(getPostsByCategory(data)))
);
