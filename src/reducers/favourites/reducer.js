import { FAVOURITES_TOGGLE } from './constants';
import initState from './initState';

export default (state = initState, { type, payload }) => {
  switch (type) {
    case FAVOURITES_TOGGLE: {
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
