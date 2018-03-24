import { FILTER_BY_CATEGORY } from '../actions';
import { SORT_POSTS } from '../actions/sort';

const filtersReducerDefaultState = {
  category: { name: 'all', path: 'all' },
  sortBy: '-timestamp',
};

export default (state = filtersReducerDefaultState, action) => {
  console.log(action);
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        category: action.category
      };
    case SORT_POSTS:
      return {
        ...state,
        sortBy: action.sortBy
      };
    default:
      return state;
  }
};
