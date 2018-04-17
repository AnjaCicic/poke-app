import { CARDS, FAVOURITES, SORT } from '../constants/actionTypes';

export const fetchCards = () => ({
  type: CARDS.fetch,
});

export const addToFavourites = data => ({
  type: FAVOURITES.add,
  payload: data,
});

export const removeFromFavourites = data => ({
  type: FAVOURITES.remove,
  payload: data,
});

export const changeSort = data => ({
  type: SORT.change,
  payload: data,
});
