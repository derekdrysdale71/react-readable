import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Voter from './Voter';
import { removePost } from '../actions';

class PostDetail extends Component {
  handleDeletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push(`/`);
  }
  render() {
    const { id, category, title, body, author, timestamp, voteScore, commentCount } = this.props.post;
    const { match } = this.props;
    return (
      <div className="row">
        <div className="card">
          <div className="card-content">
            <span style={{ fontSize: '2rem' }} className="card-title">{title}</span>
            <p style={{ margin: '0 0 15px 0', fontSize: '1.5rem' }}>{body}</p>
            <p className="card-text">Author: {author} - Date: {moment(timestamp).format('MMM-DD-YYYY hh:mma')}</p>
            <Voter type="post" id={id} score={voteScore} />
            <p>Comments: {commentCount}</p>
          </div>
          <div className="card-action">
            <Link
              to={{
                pathname: `/edit/${id}`,
                state: {
                  isEditing: true,
                  category: category,
                  previousPath: match.url
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
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.posts.post
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(removePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetail));
