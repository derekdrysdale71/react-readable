import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class CreateEditPostView extends Component {
  state = {
    category: '',
    title: '',
    body: '',
    author: ''
  }

  componentDidMount() {
    if (this.props.post !== undefined) {
      this.setState({
        author: this.props.post.author,
        title: this.props.post.title,
        body: this.props.post.body,
        category: this.props.post.category
      });
    }
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
  handleAdd = (e) => {
    e.preventDefault();
    const post = {
      category: this.state.category,
      title: this.state.title,
      body: this.state.body,
      author: this.state.author
    };
    this.props.addPost(post);
  }
  render() {
    return (
      <div>
        <h3>Add/Edit Post</h3>
        <form onSubmit={this.handleAdd}>
          <div className="form-group">
            <select className="form-control" value={this.props.category} onChange={this.onCategoryChange}>
              {this.props.category || <option key="" value="">category</option>}
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
              value={this.state.title}
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
              value={this.state.author}
              onChange={this.onAuthorChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <a href="/" id="cancel" name="cancel" className="btn btn-secondary">Cancel</a>
        </form >
      </div >
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts.post,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditPostView);
