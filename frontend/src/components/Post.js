import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const Post = ({ title, body, author, voteScore, timestamp }) => (
  <div class="ui raised card">
    <p>{title}</p>
    <p>{body}</p>
    <p>Author: {author} - Date: {moment(timestamp).format('MMM-DD-YYYY hh:mma')}</p>
    <p>{voteScore}</p>
  </div>
);

export default connect()(Post);
