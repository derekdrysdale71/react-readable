import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import filteredPosts from '../selectors/posts';

import PostList from './PostList';

class CategoryView extends Component {
  render() {
    return (
      <div>
        <div><PostList posts /></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default withRouter(connect(mapStateToProps)(CategoryView));
