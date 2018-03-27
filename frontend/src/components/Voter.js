import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vote } from '../actions/vote';

const Voter = props => (
  <div>
    <span>Score: {props.score}</span>
    <a
      className="btn-flat waves-effect"
      onClick={() => props.vote(props.type, props.id, 'upVote')}
    >
      <i style={{ fontSize: '2rem' }} className="material-icons green-text">thumb_up</i>
    </a>
    <a
      className="btn-flat waves-effect"
      onClick={() => props.vote(props.type, props.id, 'downVote')}
    >
      <i style={{ fontSize: '2rem' }} className="material-icons red-text">thumb_down</i>
    </a>
  </div >
);

Voter.propTypes = {
  vote: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapDispatchToProps = { vote };

export default connect(null, mapDispatchToProps)(Voter);
