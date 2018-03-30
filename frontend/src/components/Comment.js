import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Voter from './Voter';
import { removeComment } from '../actions';

const Comment = props => (
  <div className="card">
    <div className="card-content">
      <span className="card-title">{props.comment.body}</span>
      <p>Author: {props.comment.author} - Date: {moment(props.comment.timestamp).format('MMM-DD-YYYY hh:mma')}</p>
      <Voter type="comment" id={props.comment.id} score={props.comment.voteScore} />
    </div>
    <div>
      <div className="card-action">
        <Link
          to={{
            pathname: `/edit/${props.match.params.category}/${props.match.params.id}/${props.comment.id}`, state: {
              isEditing: true,
              id: props.comment.id,
              body: props.comment.body,
              author: props.comment.author
            }
          }}
        >
          <button className="btn-flat waves-effect"><i style={{ fontSize: '2rem' }} className="material-icons left">edit</i></button>
        </Link>
        <button onClick={() => props.deleteComment(props.comment)} className="btn-flat waves-effect">
          <i style={{ fontSize: '2rem' }} className="material-icons left">delete</i>
        </button>
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteComment: (comment) => dispatch(removeComment(comment))
});

export default connect(null, mapDispatchToProps)(withRouter(Comment));
