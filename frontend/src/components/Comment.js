import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Voter from './Voter';

const Comment = ({ id, body, author, timestamp, voteScore }) => (
  <div className="card">
    <div className="card-body">
      <div className="card-text">
        <h5>{body}</h5>
      </div>
      <p className="card-text">Author: {author} - Date: {moment(timestamp).format('MMM-DD-YYYY hh:mma')}</p>
      <Voter type="comment" id={id} score={voteScore} />
      <span>
        <button>Edit</button>
        <button>Delete</button>
      </span>
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

export default connect()(Comment);
