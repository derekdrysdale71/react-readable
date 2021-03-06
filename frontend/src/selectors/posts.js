// Get filtered and sorted Posts
export default ({ posts }, { filter, sortBy }) => posts.filter((post) => (
  (filter === undefined) || (post.category === filter))
).sort((a, b) => {
  if (sortBy === '-timestamp') {
    return a.timestamp < b.timestamp ? 1 : -1;
  } else if (sortBy === '+timestamp') {
    return a.timestamp > b.timestamp ? 1 : -1;
  } else if (sortBy === '-voteScore') {
    return a.voteScore < b.voteScore ? 1 : -1;
  } else if (sortBy === '+voteScore') {
    return a.voteScore > b.voteScore ? 1 : -1;
  }
});
