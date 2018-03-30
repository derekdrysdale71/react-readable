import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Sorter = ({ handleSort }) => (
  <div className="valign-wrapper">
    <p className="col">Sort by:</p>
    <div className="col">
      <select className="browser-default" defaultValue="-timestamp" onChange={handleSort}>
        <option value="-timestamp">Timestamp Desc</option>
        <option value="+timestamp">Timestamp Asc</option>
        <option value="-voteScore">VoteScore Desc</option>
        <option value="+voteScore">VoteScore Asc</option>
      </select>
    </div>
  </div>
);

Sorter.propTypes = {
  handleSort: PropTypes.func.isRequired
};

export default connect()(Sorter);
