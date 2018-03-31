import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sorter from './Sorter';
import Post from './Post';
import filteredPosts from '../selectors/posts';
import { sortPosts } from '../actions';

class PostList extends Component {
  handleSort = (e) => {
    this.props.setSort(e.target.value);
  };
  render() {
    const { posts, match } = this.props;
    const { category } = match.params;
    return (
      <div style={{ margin: '15px 0 0 0' }}>
        <div className="valign-wrapper">
          <h4 style={{ margin: '0 5px 0 0' }}>{category || 'all'}</h4>
          <Link
            to={{
              pathname: '/new',
              state: {
                isEditing: false,
                category,
                previousPath: match.url
              }
            }}
            className="btn-floating waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </Link>
          <div className="right">
            <Sorter handleSort={this.handleSort} />
          </div>
        </div>
        <div>
          {posts.map(post => <Post key={post.id} {...post} />)}
        </div>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  setSort: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: filteredPosts(state.posts, state.filters)
});

const mapDispatchToProps = dispatch => ({
  setSort: option => dispatch(sortPosts(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostList));
