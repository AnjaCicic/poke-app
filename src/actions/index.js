import { CARDS, FAVOURITES, SETTINGS, DETAILS } from '../constants/actionTypes';

export const fetchCards = () => ({
  type: CARDS.fetch,
});

export const toggleFavourites = data => ({
  type: FAVOURITES.toggle,
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

export const fetchDetails = data => ({
  type: DETAILS.fetch,
  payload: data,
});
