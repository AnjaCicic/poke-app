import { DETAILS } from '../constants/actionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case DETAILS.fetch:
      return {};
    case DETAILS.add:
      return payload;
    default:
      return state;
  }
};
