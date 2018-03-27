import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Voter from './Voter';

const Post = ({ id, category, title, body, author, timestamp, voteScore, commentCount }) => (
  <div className="card">
    <Link to={`/${category}/${id}`} style={{ textDecoration: 'none' }}>
      <div className="card-header">
        <h4 className="btn-block">{title}</h4>
        <p className="card-text">Author: {author} - Date: {moment(timestamp).format('MMM-DD-YYYY hh:mma')}</p>
      </div>
    </Link>
    <div className="card-body">
      <div className="card-text">
        <h5>{body}</h5>
      </div>
      <Voter type="post" id={id} score={voteScore} />
      <div className="">Comments: {commentCount}</div>
    </div>
  </div>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired
};

export default connect()(Post);
