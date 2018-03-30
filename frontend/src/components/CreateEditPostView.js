import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, updatePost } from '../actions';

class CreateEditPostView extends Component {
  state = {
    isEditing: false,
    id: '',
    category: '',
    title: '',
    body: '',
    author: ''
  }

  componentDidMount() {
    if (this.props.post.id) {
      this.setState({
        id: this.props.post.id,
        author: this.props.post.author,
        title: this.props.post.title,
        body: this.props.post.body,
      });
    } else {
      this.setState({
        id: this.props.location.state.postId,
        title: this.props.location.state.postTitle,
        body: this.props.location.state.postBody,
        author: this.props.location.state.postAuthor
      });
    }
    this.setState({
      isEditing: this.props.location.state.isEditing,
      category: this.props.location.state.category
    });
  }
  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value
    });
  }

  onAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    });
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      category: this.state.category,
      title: this.state.title,
      body: this.state.body,
      author: this.state.author
    };
    if (this.state.isEditing) {
      post.id = this.state.id;
      console.log('Edited Post:', post);
      this.props.editPost(post);
    } else {
      this.props.addPost(post);
    }
    this.props.history.push(this.props.location.state.previousPath);
  }
  render() {
    const formHeader = this.state.isEditing ? 'Edit Post' : 'Add Post';
    return (
      <div>
        <h4>{formHeader}</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <select className="browser-default" value={this.state.category} onChange={this.onCategoryChange}>
              {this.state.category || <option key="" value="">category</option>}
              {this.props.categories.map(category => (
                <option key={category.path} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              value={this.state.title || ''}
              onChange={this.onTitleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              placeholder="body"
              value={this.state.body}
              onChange={this.onBodyChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="author"
              value={this.state.author || ''}
              onChange={this.onAuthorChange}
              disabled={this.state.isEditing}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <a href="/" id="cancel" name="cancel" className="btn btn-secondary">Cancel</a>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts.post,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(createPost(post)),
  editPost: post => dispatch(updatePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateEditPostView));
