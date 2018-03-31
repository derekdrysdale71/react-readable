import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';
import sortedComments from '../selectors/comments';
import Sorter from './Sorter';
import { sortComments } from '../actions';

const CommentList = ({ setSort, match, comments, location }) => (
  <div style={{ margin: '15px 0 0 0' }}>
    <div className="valign-wrapper">
      <h4 style={{ margin: '0 5px 0 0' }}>Comments</h4>
      <Link
        to={`${match.url}/new`}
        state={{ prevPath: location.pathname }}
        onClick={this.handleAdd}
        className="btn-floating waves-effect waves-light red"
      >
        <i className="material-icons">add</i>
      </Link>
      <Sorter handleSort={e => setSort(e.target.value)} />
    </div>
    <div>
      {comments.map(comment => <Comment key={comment.id} comment={comment} className="list-group-item list-group-item-action" />)}
    </div>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  setSort: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  comments: sortedComments(state.comments, state.filters)
});

const mapDispatchToProps = dispatch => ({
  setSort: option => dispatch(sortComments(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommentList));
