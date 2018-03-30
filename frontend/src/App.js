import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts } from './actions';

// Import Views
import DashboardView from './components/DashboardView';
import CreateEditPostView from './components/CreateEditPostView';
import PostDetailView from './components/PostDetailView';
import CreateEditCommentView from './components/CreateEditCommentView';
import Error from './components/Error';

import Header from './components/Header';

class App extends Component {
  componentDidMount() {
    this.props.getAllCategories();
    this.props.getAllPosts();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={DashboardView} />
          <Route exact path="/new" component={CreateEditPostView} />
          <Route exact path="/:category" component={DashboardView} />
          <Route exact path="/edit/:category/:post_id/:comment_id" component={CreateEditCommentView} />
          <Route exact path="/edit/:post_id" component={CreateEditPostView} />
          <Route exact path="/:category/:post_id/new" component={CreateEditCommentView} />
          <Route exact path="/:category/:post_id" component={PostDetailView} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  getAllCategories: PropTypes.func.isRequired,
  getAllPosts: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(fetchCategories()),
  getAllPosts: () => dispatch(fetchPosts())
});

export default withRouter(connect(null, mapDispatchToProps)(App));
