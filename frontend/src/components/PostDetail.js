import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Voter from './Voter';
import { removePost } from '../actions';
import { dateFormat } from '../utils/helpers';

class PostDetail extends Component {
  handleDeletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
  render() {
    const { match, post } = this.props;
    const { id, category, title, body, author, timestamp, voteScore, commentCount } = post;
    return (
      <div className="row">
        <div className="card">
          <div className="card-content">
            <span style={{ fontSize: '2rem' }} className="card-title">{title}</span>
            <p style={{ margin: '0 0 15px 0', fontSize: '1.5rem' }}>{body}</p>
            <p className="card-text">Author: {author} - Date: {dateFormat(timestamp)}</p>
            <Voter type="post" id={id} score={voteScore} />
            <p>Comments: {commentCount}</p>
          </div>
          <div className="card-action">
            <Link
              to={{
                pathname: `/edit/${id}`,
                state: {
                  isEditing: true,
                  category,
                  previousPath: match.url,
                  postId: id,
                  postTitle: title,
                  postBody: body,
                  postAuthor: author,
                }
              }}
            >
              <button className="btn-flat waves-effect"><i style={{ fontSize: '2rem' }} className="material-icons left">edit</i></button>
            </Link>
            <button onClick={this.handleDeletePost} className="btn-flat waves-effect">
              <i style={{ fontSize: '2rem' }} className="material-icons left">delete</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PostDetail.propTypes = {
  match: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.posts.post
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(removePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetail));
