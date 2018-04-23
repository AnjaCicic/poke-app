import { combineReducers } from 'redux';

import cards from './cards';
import favourites from './favourites';
import settings from './settings';

export default combineReducers({
  cards,
  favourites,
  settings,
});
