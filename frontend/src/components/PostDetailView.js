import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import CreateEditCommentView from './CreateEditCommentView';
import PostDetail from './PostDetail';
import CommentList from './CommentList';
import { fetchPost, fetchComments } from '../actions';

class PostDetailView extends Component {
  componentDidMount() {
    if (this.props.match.params.post_id) {
      this.props.getPost(this.props.match.params.post_id);
      this.props.getComments(this.props.match.params.post_id);
    }
  }

  render() {
    if (this.props.post.id) {
      return (
        <div className="row">
          <h4 className="col-md-12">Post Details</h4>
          <div className="col-md-12"><PostDetail /></div>
          <div className="col-md-12"><CommentList comments /></div>
        </div>
      );
    }
    return (
      <div>
        <h4>404 - This post doesn't exist</h4>
      </div>
    );
  }
}

PostDetailView.propTypes = {
  getPost: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired
};

function mapStateToProps({ posts, comments }) {
  return {
    post: posts.post,
    comments
  };
};

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(fetchPost(id)),
  getComments: id => dispatch(fetchComments(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetailView));
