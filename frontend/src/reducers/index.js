import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import filters from './filters';

export default combineReducers({
  categories,
  posts,
  filters
});
