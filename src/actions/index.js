import { CARDS, FAVOURITES, SETTINGS } from '../constants/actionTypes';

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
  type: SETTINGS.changeSort,
  payload: data,
});

export const changePage = data => ({
  type: SETTINGS.changePage,
  payload: data,
});
