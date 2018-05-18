import { DETAILS_FETCH, DETAILS_ADD } from './constants';
import initState from './initState';

export default (state = initState, { type, payload }) => {
  switch (type) {
    case DETAILS_FETCH:
      return {
        ...initState,
        loading: true,
      };
    case DETAILS_ADD:
      return {
        ...state,
        loading: false,
        card: payload,
      };
    default:
      return state;
  }
};
