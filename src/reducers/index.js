import { combineReducers } from 'redux';

import cards from './cards';
import favourites from './favourites';
import sort from './sort';

export default combineReducers({
  cards,
  favourites,
  sort,
});
