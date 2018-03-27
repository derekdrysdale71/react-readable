// Get sorted comments
export default (comments, { filter, sortBy }) => comments.filter((comment) => (
  comment)
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