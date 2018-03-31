import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment, updateComment } from '../actions';

class CreateEditCommentView extends Component {
  state = {
    id: '',
    parentId: '',
    body: '',
    author: '',
    isEditing: false
  }

  componentDidMount() {
    const { isEditing, id, body, author } = this.props.location.state;
    if (this.props.location.state) {
      this.setState({
        isEditing: isEditing || false,
        id,
        body: body || '',
        author: author || ''
      });
    }
    this.setState({ parentId: this.props.post.id });
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

  handleAdd = (e) => {
    e.preventDefault();
    const { category, post_id } = this.props.match.params;
    const comment = {
      id: this.state.id,
      parentId: this.state.parentId,
      body: this.state.body,
      author: this.state.author
    };
    if (this.state.isEditing) {
      this.props.editComment(comment);
    } else {
      this.props.addComment(comment);
    }
    this.props.history.push(`/${category}/${post_id}`);
  }
  render() {
    const formHeader = this.state.isEditing ? 'Edit Comment' : 'Add Comment';
    return (
      <div>
        <h4>{formHeader}</h4>
        <form onSubmit={this.handleAdd}>
          <div className="form-group">
            <textarea
              className="form-control"
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
          <button id="cancel" name="cancel" className="btn btn-secondary">Cancel</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts.post
});

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(createComment(comment)),
  editComment: comment => dispatch(updateComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditCommentView);