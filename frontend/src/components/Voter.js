import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vote } from '../actions/vote';

const Voter = props => (
  <div className="fr">
    <span className="">Score: {props.score}</span>
    <button
      type="button"
      className=""
      onClick={() => props.vote(props.type, props.id, 'upVote')}
    >+
    </button>
    <button
      type="button"
      className=""
      onClick={() => props.vote(props.type, props.id, 'downVote')}
    >-
    </button>
  </div>
);

Voter.propTypes = {
  vote: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapDispatchToProps = { vote };

export default connect(null, mapDispatchToProps)(Voter);
