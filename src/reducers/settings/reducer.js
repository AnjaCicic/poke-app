import { SETTINGS_CHANGE_SORT, SETTINGS_CHANGE_PAGE } from './constants';
import initState from './initState';

export default (state = initState, { type, payload }) => {
  switch (type) {
    case SETTINGS_CHANGE_SORT:
      return { ...state, sort: payload, page: 1 };
    case SETTINGS_CHANGE_PAGE:
      return { ...state, page: payload };
    default:
      return state;
  }
};
