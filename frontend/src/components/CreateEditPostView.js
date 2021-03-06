import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

  componentWillMount() {
    const { isEditing, category, postId, postTitle, postBody, postAuthor } = this.props.location.state;
    this.setState({
      isEditing,
      category,
      id: postId,
      title: postTitle,
      body: postBody,
      author: postAuthor
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

CreateEditPostView.propTypes = {
  location: PropTypes.object.isRequired,
  editPost: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(createPost(post)),
  editPost: post => dispatch(updatePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateEditPostView));
