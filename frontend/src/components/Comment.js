import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Voter from './Voter';
import { removeComment } from '../actions';
import { dateFormat } from '../utils/helpers';

const Comment = ({ comment, match, deleteComment }) => {
  const { id, body, author, timestamp, voteScore } = comment;
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{body}</span>
        <p>Author: {author} - Date: {dateFormat(timestamp)}</p>
        <Voter type="comment" id={id} score={voteScore} />
      </div>
      <div>
        <div className="card-action">
          <Link
            to={{
              pathname: `/edit/${match.params.category}/${match.params.post_id}/${id}`,
              state: {
                isEditing: true,
                id,
                body,
                author
              }
            }}
          >
            <button className="btn-flat waves-effect"><i style={{ fontSize: '2rem' }} className="material-icons left">edit</i></button>
          </Link>
          <button onClick={() => deleteComment(comment)} className="btn-flat waves-effect">
            <i style={{ fontSize: '2rem' }} className="material-icons left">delete</i>
          </button>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  deleteComment: comment => dispatch(removeComment(comment))
});

export default connect(null, mapDispatchToProps)(withRouter(Comment));
