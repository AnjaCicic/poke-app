import { FAVOURITES_TOGGLE } from './constants';

export const toggleFavourites = data => ({
  type: FAVOURITES_TOGGLE,
  payload: data,
});
