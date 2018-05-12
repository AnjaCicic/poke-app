import { combineReducers } from 'redux';

import cards from './cards';
import favourites from './favourites';
import settings from './settings';
import details from './details';

export default combineReducers({
  cards,
  favourites,
  settings,
  details,
});
