import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import comments from './comments';
import filters from './filters';

export default combineReducers({
  categories,
  posts,
  comments,
  filters
});
