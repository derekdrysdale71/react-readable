import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Voter from './Voter';
import { removePost } from '../actions';
import { dateFormat } from '../utils/helpers';

class Post extends Component {
  handleDeletePost = () => {
    this.props.deletePost(this.props.id);
    this.props.history.push(this.props.match.url);
  }
  render() {
    const { id, category, title, body, author, timestamp, voteScore, commentCount } = this.props;
    const { match } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            className="card-title"
            to={`/${category}/${id}`}
          >
            {title}
          </Link>
          <p>Author: {author} - Date: {dateFormat(timestamp)}</p>
          <Voter type="post" id={id} score={voteScore} />
          <div className="">Comments: {commentCount}</div>
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
    )
  }
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired
};

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(removePost(id))
});

export default connect(null, mapDispatchToProps)(withRouter(Post));
