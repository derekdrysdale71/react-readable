import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions';

class EditPostView extends Component {
  state = { ...this.props.post }
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

  handleAdd = (e) => {
    e.preventDefault();
    const post = {
      ...this.props.post,
      title: this.state.title,
      body: this.state.body
    };
    this.props.editPost(post);
  }
  render() {
    return (
      <div>
        <h3>Edit Post</h3>
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
              value={this.props.title || ''}
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
  editPost: post => dispatch(updatePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostView);
