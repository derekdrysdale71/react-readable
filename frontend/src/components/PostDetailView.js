import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostDetail from './PostDetail';
import CommentList from './CommentList';
import { fetchPost, fetchComments } from '../actions';

class PostDetailView extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
    this.props.getComments(this.props.match.params.id);
  }

  render() {
    const postDetail = this.props.post;
    console.log(postDetail);
    return (
      <div className="row">
        <h3 className="col-md-12">Post Details</h3>
        <div className="col-md-12"><PostDetail /></div>
        <div className="col-md-12"><CommentList comments /></div>
      </div>
    );
  }
}

PostDetailView.propTypes = {
  getPost: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired
};

function mapStateToProps({ posts, comments }) {
  console.log(posts.post);
  return {
    post: posts.post,
    comments
  };
}

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(fetchPost(id)),
  getComments: id => dispatch(fetchComments(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetailView));
