import { FAVOURITES } from '../constants/actionTypes';

export default (state = [], { type, payload }) => {
  switch (type) {
    case FAVOURITES.add:
      if (state.findIndex(single => single.id === payload.id) !== -1) return state;

      return [...state, payload];
    case FAVOURITES.remove:
      return state.filter(single => single.id !== payload);
    default:
      return state;
  }
};
