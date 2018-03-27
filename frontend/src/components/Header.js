import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterPosts } from '../actions/sort';

const Header = ({ setFilter }) => (
  <nav>
    <div className="nav-wrapper">
      <Link
        to="/"
        className="brand-logo left"
        onClick={() => setFilter(undefined)}
      >
        readable
    </Link>
    </div>
  </nav>
);

const mapDispatchToProps = dispatch => ({
  setFilter: category => dispatch(filterPosts(category))
});

export default connect(null, mapDispatchToProps)(Header);
