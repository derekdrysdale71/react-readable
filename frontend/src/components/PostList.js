import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sorter from './Sorter';
import Post from './Post';
import filteredPosts from '../selectors/posts';
import { sortPosts } from '../actions/sort';


class PostList extends Component {
  handleSort = (e) => {
    console.log(e.target.value);
    this.props.setSort(e.target.value);
  };
  handleAdd = () => {

  };
  render() {
    const { posts, match } = this.props;
    return (
      <div>
        <span className="row" style={{ margin: '0 0 0 2px' }}>
          <h3 className="h3" >{match.params.category || 'all'}</h3>
          <Link to="/create" onClick={this.handleAdd} className="btn btn-primary btn-sm">Add Post</Link>
        </span>
        <div>
          <Sorter handleSort={this.handleSort} />
          <div className="list-group">
            {posts.map(post => <Post key={post.id} {...post} className="list-group-item list-group-item-action" />)}
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  posts: filteredPosts(state.posts, state.filters)
});

const mapDispatchToProps = dispatch => ({
  setSort: option => dispatch(sortPosts(option))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));
