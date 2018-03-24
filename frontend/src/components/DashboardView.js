import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryList from './CategoryList';
import PostList from './PostList';

class DashboardView extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"><CategoryList categories /></div>
        <div className="col-md-9"><PostList posts /></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts
  };
}

export default withRouter(connect(mapStateToProps)(DashboardView));
