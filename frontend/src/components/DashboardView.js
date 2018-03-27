import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryList from './CategoryList';
import PostList from './PostList';
import { filterPosts } from '../actions/sort';

class DashboardView extends Component {
  componentWillMount() {
    this.props.setFilter(this.props.match.params.category);
  }
  render() {
    return (
      <div className="row">
        <div className="col s3"><CategoryList categories /></div>
        <div className="col s9"><PostList posts /></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  setFilter: category => dispatch(filterPosts(category))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardView));
