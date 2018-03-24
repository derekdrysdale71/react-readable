import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCategory } from '../actions';

class CategoryList extends Component {
  handleSelectCategory = (category) => {
    this.props.setCategory(category);
  }
  render() {
    const { categories } = this.props.categories;
    return (
      <div>
        <div>
          <h4>Categories</h4>
          <div className="list-group">
            {categories.map(category => (
              <button onClick={() => this.props.setCategory(category)} key={category.path} className="list-group-item list-group-item-action" >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

// CategoryList.propTypes = {
//   categories: PropTypes.array.isRequired,
//   filterFunc: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch(selectCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
