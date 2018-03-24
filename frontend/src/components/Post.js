import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Voter from './Voter';

const Post = ({ id, title, body, author, timestamp, voteScore, commentCount }) => (
  <div className="ui raised card">
    <div className="card-header">
      <h4>{title}</h4>
      <p className="card-text">Author: {author} - Date: {moment(timestamp).format('MMM-DD-YYYY hh:mma')}</p>
    </div>
    <div className="card-body">
      <div className="card-text">
        <h5>{body}</h5>
      </div>
      <Voter type="post" id={id} score={voteScore} />
      <p>Comments: {commentCount}</p>
    </div>
  </div>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired
};

export default connect()(Post);
