import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterPosts } from '../actions/sort';

const Header = ({ setFilter }) => (
  <nav className="navbar navbar-dark bg-dark">
    <Link
      to="/"
      className="navbar-brand"
      onClick={() => setFilter(undefined)}
    >
      readable
    </Link>
  </nav>
);

const mapDispatchToProps = dispatch => ({
  setFilter: category => dispatch(filterPosts(category))
});

export default connect(null, mapDispatchToProps)(Header);
