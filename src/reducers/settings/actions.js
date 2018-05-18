import { SETTINGS_CHANGE_SORT, SETTINGS_CHANGE_PAGE } from './constants';

export const changeSort = data => ({
  type: SETTINGS_CHANGE_SORT,
  payload: data,
});

export const changePage = data => ({
  type: SETTINGS_CHANGE_PAGE,
  payload: data,
});
