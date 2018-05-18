import { DETAILS_FETCH, DETAILS_ADD } from './constants';


export const fetchDetails = data => ({
  type: DETAILS_FETCH,
  payload: data,
});

export const addDetails = card => ({
  type: DETAILS_ADD,
  payload: card,
});
