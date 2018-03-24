// Get filtered and sorted Posts
export default (posts, { categories, filters }) => posts.filter((post) => {
  const all = (categories.category.name === 'all');
  const categoryMatch = post.category.toLowerCase() === categories.category.name.toLowerCase();
  return all || categoryMatch;
}).sort((a, b) => {
  if (filters.sortBy === '-timestamp') {
    return a.timestamp < b.timestamp ? 1 : -1;
  } else if (filters.sortBy === '+timestamp') {
    return a.timestamp > b.timestamp ? 1 : -1;
  } else if (filters.sortBy === '-voteScore') {
    return a.voteScore < b.voteScore ? 1 : -1;
  } else if (filters.sortBy === '+voteScore') {
    return a.voteScore > b.voteScore ? 1 : -1;
  }
});
