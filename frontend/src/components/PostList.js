import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sorter from '../components/sorter';
import Post from './Post';
import filteredPosts from '../selectors/posts';

class PostList extends Component {
  handleSort = (category) => {
    // this.props.filterPosts(category);
  };
  render() {
    const { posts, category } = this.props;
    return (
      <div>
        <div className="list-group">
          <h3>{category.name || 'All Posts'}</h3>
          <Sorter />
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

export default connect(mapStateToProps)(PostList);
