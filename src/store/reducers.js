import cards from '../reducers/cards/reducer';
import details from '../reducers/details/reducer';
import favourites from '../reducers/favourites/reducer';
import settings from '../reducers/settings/reducer';

export default (state, action) => ({
  cards: cards(state.cards, action),
  details: details(state.details, action),
  favourites: favourites(state.favourites, action),
  settings: settings(state.settings, action),
});
