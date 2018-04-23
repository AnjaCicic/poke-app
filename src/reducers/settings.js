import { SETTINGS } from '../constants/actionTypes';

const initState = {
  sort: '',
  page: 1,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case SETTINGS.changeSort:
      return { ...state, sort: payload, page: 1 };
    case SETTINGS.changePage:
      return { ...state, page: payload };
    default:
      return state;
  }
};
