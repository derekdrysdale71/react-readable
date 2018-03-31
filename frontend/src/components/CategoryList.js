import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPosts } from '../actions';

const CategoryList = ({ categories, setFilter, }) => (
  <div>
    <h4>categories</h4>
    <div className="collection">
      {categories.map(category => (
        <Link
          onClick={() => setFilter(category.name)}
          to={category.name !== 'all' ? `/${category.name}` : '/'}
          key={category.path}
          className="collection-item"
        >
          {category.name}
        </Link>
      ))}
    </div>
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  setFilter: category => dispatch(filterPosts(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryList));
