import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Voter from './Voter';
import { removePost } from '../actions';

class PostDetail extends Component {
  handleEditPost = () => {

  }

  handleDeletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
  render() {
    const { post } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="btn-block">{post.title}</h4>
          <p className="card-text">Author: {post.author} - Date: {moment(post.timestamp).format('MMM-DD-YYYY hh:mma')}</p>
        </div>
        <div className="card-body">
          <div className="card-text">
            <h5>{post.body}</h5>
          </div>
          <Voter type="post" id={post.id} score={post.voteScore} />
          <div className="">Comments: {post.commentCount}</div>
          <span>
            <Link to={`/edit/${post.id}`}>
              <button className="btn btn-default btn-sm"><i className="fa fa-edit fa-large" />Edit</button>
            </Link>
            <button className="btn btn-default btn-sm" onClick={this.handleDeletePost}>Delete</button>
          </span>
        </div>
      </div>
    );
  }
}

PostDetail.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  post: state.posts.post
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(removePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
