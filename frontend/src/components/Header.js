import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Header = () => (
  <nav className="ui huge menu">
    <a href="/" className="navbar-brand">readable</a>
  </nav>
);

export default Header;
