import { combineEpics } from 'redux-observable';
import { fetchCards } from './cards';

export default combineEpics(
  fetchCards,
);
