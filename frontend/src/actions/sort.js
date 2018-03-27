export const FILTER_POSTS = 'FILTER_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const SORT_COMMENTS = 'SORT_COMMENTS';

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
