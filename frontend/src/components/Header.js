import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <a href="/" className="navbar-brand">readable</a>
  </nav>
);

export default Header;
