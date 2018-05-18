import { CARDS_ADD, CARDS_FETCH } from './constants';
import initState from './initState';

export default (state = initState, { type, payload }) => {
  switch (type) {
    case CARDS_FETCH:
      return {
        ...initState,
        loading: true,
      };
    case CARDS_ADD:
      return {
        ...initState,
        loading: false,
        pokemon: payload,
      };
    default:
      return state;
  }
};
