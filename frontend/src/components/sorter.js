import React from 'react';
import { connect } from 'react-redux';
import filteredPosts from '../selectors/posts';

const Sorter = props => (
  <div className="">
    <span className="">Sort by:</span>
    <select defaultValue={props.sortBy} onChange="">
      <option value="+voteScore">VoteScore Asc</option>
      <option value="-voteScore">VoteScore Desc</option>
      <option value="+timestamp">Timestamp Asc</option>
      <option value="-timestamp">Timestamp Desc</option>
    </select>
  </div>
);

const mapDispatchToProps = dispatch => ({
  //setCategory: category => dispatch(selectCategory(category))
});

export default connect(null, mapDispatchToProps)(Sorter);