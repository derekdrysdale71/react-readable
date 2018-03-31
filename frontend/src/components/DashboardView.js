import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoryList from './CategoryList';
import PostList from './PostList';
import { filterPosts } from '../actions';

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

DashboardView.propTypes = {
  setFilter: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts.posts,
  post: state.posts.post
});

const mapDispatchToProps = dispatch => ({
  setFilter: category => dispatch(filterPosts(category))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardView));
