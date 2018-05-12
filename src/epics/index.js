import { combineEpics } from 'redux-observable';
import { fetchCards } from './cards';
import { fetchDetails } from './details';

export default combineEpics(
  fetchCards,
  fetchDetails,
);
