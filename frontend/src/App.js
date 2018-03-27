import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts } from './actions';

// Import Views
import DashboardView from './components/DashboardView';
import CreateEditPostView from './components/CreateEditPostView';
import PostDetailView from './components/PostDetailView';

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
          <Route exact path="/create" component={CreateEditPostView} />
          <Route exact path="/:category" component={DashboardView} />
          <Route exact path="/:category/:id" component={PostDetailView} />
          <Route exact path="/:category/:id/edit" component={CreateEditPostView} />
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
