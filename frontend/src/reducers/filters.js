import { FILTER_POSTS, SORT_POSTS, SORT_COMMENTS } from '../actions/types';

const filtersReducerDefaultState = {
  filter: undefined,
  sortBy: '-timestamp',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case FILTER_POSTS:
      return {
        ...state,
        filter: action.category
      };
    case SORT_POSTS:
      return {
        ...state,
        sortBy: action.sortBy
      };
    case SORT_COMMENTS:
      return {
        ...state,
        sortBy: action.sortBy
      };
    default:
      return state;
  }
};
