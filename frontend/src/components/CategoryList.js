import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPosts } from '../actions/sort';

const CategoryList = props => (
  <div>
    <h4 className="h4">categories</h4>
    <div className="list-group">
      {props.categories.map(category => (
        <Link
          onClick={() => props.setFilter(category.name)}
          to={category.name !== 'all' ? `/${category.name}` : '/'}
          key={category.path}
          className="list-group-item list-group-item-action"
        >
          {category.name}
        </Link>
      ))}
    </div>
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  setFilter: category => dispatch(filterPosts(category))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryList));
