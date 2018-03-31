import { FILTER_POSTS, SORT_POSTS, SORT_COMMENTS } from './types';

// Actions
export const filterPosts = category => ({
  type: FILTER_POSTS,
  category
});

export const sortPosts = sortBy => ({
  type: SORT_POSTS,
  sortBy
});

export const sortComments = sortBy => ({
  type: SORT_COMMENTS,
  sortBy
});
