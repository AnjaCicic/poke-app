import { FAVOURITES } from '../constants/actionTypes';

export default (state = [], { type, payload }) => {
  switch (type) {
    case FAVOURITES.toggle: {
      const index = state.findIndex(single => single === payload);

      if (index === -1) {
        return [...state, payload];
      }

      return state.filter(single => single !== payload);
    }
    default:
      return state;
  }
};
