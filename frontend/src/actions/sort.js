export const SORT_POSTS = 'SORT_POSTS';
export const SORT_COMMENTS = 'SORT_COMMENTS';

// Actions
export const sortPosts = sortBy => ({
  type: SORT_POSTS,
  sortBy
});

export const sortComment = sortBy => ({
  type: SORT_COMMENTS,
  sortBy
});
