import { CARDS } from '../constants/actionTypes';

export default (state = [], { type, payload }) => {
  switch (type) {
    case CARDS.fetch:
      return [];
    case CARDS.add:
      return payload;
    default:
      return state;
  }
};
