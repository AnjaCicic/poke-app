import { combineReducers } from 'redux';

import cards from './cards';
import favourites from './favourites';

export default combineReducers({
  cards,
  favourites,
});
