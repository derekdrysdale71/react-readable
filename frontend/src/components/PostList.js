import React, { Component } from 'react';
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
  render() {
    const { posts, category } = this.props;
    return (
      <div>
        <div className="list-group">
          <h3>{category.name || 'All Posts'}</h3>
          <Sorter handleSort={this.handleSort} />
          {posts.map(post => <Post key={post.id} {...post} className="list-group-item list-group-item-action" />)}
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  posts: filteredPosts(state.posts, state),
  category: state.categories.category
});

const mapDispatchToProps = dispatch => ({
  setSort: option => dispatch(sortPosts(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
