import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';
import sortedComments from '../selectors/comments';
import Sorter from './Sorter';
import { sortComments } from '../actions/sort';

class CommentList extends Component {
  handleSort = (e) => {
    console.log(e.target.value);
    this.props.setSort(e.target.value);
  };
  render() {
    const { comments } = this.props;
    return (
      <div>
        <div className="list-group">
          <h3>Comments</h3>
          <Sorter handleSort={this.handleSort} />
          {comments.map(comment => <Comment key={comment.id} {...comment} className="list-group-item list-group-item-action" />)}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentList));
