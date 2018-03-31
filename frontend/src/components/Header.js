import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterPosts } from '../actions';

const Header = ({ setFilter }) => (
  <nav className="blue-grey darken-1">
    <div className="nav-wrapper">
      <Link
        to="/"
        className="brand-logo left"
        onClick={() => setFilter(undefined)}
      >
        <i className="material-icons">developer_mode</i>
        readable
    </Link>
    </div>
  </nav>
);

const mapDispatchToProps = dispatch => ({
  setFilter: category => dispatch(filterPosts(category))
});

export default connect(null, mapDispatchToProps)(Header);
