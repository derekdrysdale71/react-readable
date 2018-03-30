import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SorterNew = ({ handleSort }) => (
  <div className="right">
    <div className="valign-wrapper">
      <p>Sort By:</p>
      <a
        style={{ margin: '0 0 0 0' }}
        className="btn-flat waves-effect"
        onClick={handleSort}
      >
        <i style={{ fontSize: '2rem' }} className="material-icons">schedule</i>
      </a>
      <a
        className="btn-flat waves-effect"
        onClick={handleSort}
      >
        <i style={{ fontSize: '2rem' }} className="material-icons">star_border</i>
      </a>
      <a
        className="btn-flat waves-effect"
        onClick={handleSort}
      >
        <i style={{ fontSize: '2.5rem' }} className="material-icons">arrow_drop_up</i>
      </a>
      <a
        className="btn-flat waves-effect"
        onClick={handleSort}
      >
        <i style={{ fontSize: '2.5rem' }} className="material-icons">arrow_drop_down</i>
      </a>
    </div>
  </div>
);

SorterNew.propTypes = {
  handleSort: PropTypes.func.isRequired
};

export default connect()(SorterNew);