import { CARDS_FETCH, CARDS_ADD } from './constants';

export const fetchCards = () => ({
  type: CARDS_FETCH,
});

export const addCards = cards => ({
  type: CARDS_ADD,
  payload: cards,
});
