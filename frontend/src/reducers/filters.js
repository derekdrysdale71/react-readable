import {
  FILTER_BY_CATEGORY,
  SORT_BY_TIMESTAMP_DESC,
  SORT_BY_TIMESTAMP_ASC,
  SORT_BY_VOTESCORE_DESC,
  SORT_BY_VOTESCORE_ASC
} from '../actions';

const filtersReducerDefaultState = {
  category: { name: 'all', path: 'all' },
  sortBy: '-timestamp',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        category: action.category
      };
    case SORT_BY_TIMESTAMP_DESC:
      return {
        ...state,
        sortBy: '-timestamp'
      };
    case SORT_BY_TIMESTAMP_ASC:
      return {
        ...state,
        sortBy: '+timestamp'
      };
    case SORT_BY_VOTESCORE_DESC:
      return {
        ...state,
        sortBy: '-votescore'
      };
    case SORT_BY_VOTESCORE_ASC:
      return {
        ...state,
        sortBy: '+votescore'
      };
    default:
      return state;
  }
};
