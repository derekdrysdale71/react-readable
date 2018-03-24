import { GET_CATEGORIES, SELECT_CATEGORY } from '../actions';

const allCategory = {
  name: 'all',
  path: 'all'
};

const defaultCategoriesState = {
  categories: [allCategory],
  category: allCategory
};

export default (state = defaultCategoriesState, action) => {
  const { categories, category } = action;
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories,
        category
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        category
      };
    default:
      return state;
  }
};
