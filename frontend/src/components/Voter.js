import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vote } from '../actions/vote';

const Voter = props => (
  <div className="fr">
    <span className="" style={{ margin: '0 10px 0 0' }}>Score: {props.score}</span>
    <a
      className="btn-floating"
      style={{ margin: '0 10px 0 0' }}
      onClick={() => props.vote(props.type, props.id, 'upVote')}
    >
      <i className="fa fa-thumbs-up fa-lg" />
    </a>
    <a
      className="btn-floating"
      onClick={() => props.vote(props.type, props.id, 'downVote')}
    >
      <i className="fa fa-thumbs-down fa-lg fa-flip-horizontal" />
    </a>
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
