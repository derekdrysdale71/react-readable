import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';
import sortedComments from '../selectors/comments';
import Sorter from './Sorter';
import { sortComments } from '../actions';

class CommentList extends Component {
  handleSort = (e) => {
    this.props.setSort(e.target.value);
  };
  render() {
    const { match, comments } = this.props;
    const url = match.url;
    return (
      <div style={{ margin: '15px 0 0 0' }}>
        <div className="valign-wrapper">
          <h4 style={{ margin: '0 5px 0 0' }}>Comments</h4>
          <Link
            to={`${match.url}/new`}
            state={{ prevPath: this.props.location.pathname }}
            onClick={this.handleAdd}
            className="btn-floating waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </Link>
          <Sorter handleSort={this.handleSort} />
        </div>
        <div>
          {comments.map(comment => <Comment key={comment.id} comment={comment} className="list-group-item list-group-item-action" />)}
        </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  comments: sortedComments(state.comments, state.filters)
});

const mapDispatchToProps = dispatch => ({
  setSort: option => dispatch(sortComments(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommentList));
