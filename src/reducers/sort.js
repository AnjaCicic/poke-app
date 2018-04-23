import { SORT } from '../constants/actionTypes';

export default (state = '', { type, payload }) => {
  switch (type) {
    case SORT.change:
      return payload;
    default:
      return state;
  }
};
