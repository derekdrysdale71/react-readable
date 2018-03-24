import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Sorter = props => (
    <div>
        <span className="">Sort by:</span>
        <select defaultValue="-timestamp" onChange={props.handleSort} >
            <option value="-timestamp">Timestamp Desc</option>
            <option value="+timestamp">Timestamp Asc</option>
            <option value="-voteScore">VoteScore Desc</option>
            <option value="+voteScore">VoteScore Asc</option>
        </select>
    </div>
);

Sorter.propTypes = {
    handleSort: PropTypes.func.isRequired
};

export default connect()(Sorter);
