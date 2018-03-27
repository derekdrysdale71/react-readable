import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Voter from './Voter';

const Post = ({ id, category, title, body, author, timestamp, voteScore, commentCount }) => (
  <div className="card" style={{ padding: '10px' }}>
    <Link to={`/${category}/${id}`} style={{ textDecoration: 'none' }}>
      <div className="card-title">
        <h4 className="btn-block">{title}</h4>
        <p>Author: {author} - Date: {moment(timestamp).format('MMM-DD-YYYY hh:mma')}</p>
      </div>
    </Link>
    <div>
      <Voter type="post" id={id} score={voteScore} />
      <div className="">Comments: {commentCount}</div>
    </div>
    <div>
      <div>
        <a className="waves-effect waves-light btn-small"><i className="material-icons left">edit</i></a>
        <a className="waves-effect waves-light btn-small"><i className="material-icons left">delete</i></a>
      </div>
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
