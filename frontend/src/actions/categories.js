import * as API from '../utils/api';
import { GET_CATEGORIES } from './types';

export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories,
});

export const fetchCategories = () => dispatch => (
  API
    .getCategories()
    .then(data => dispatch(getCategories(data)))
);
