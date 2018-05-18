import { connect } from 'react-redux';
import Favourites from './components/Favourites.component';
import { toggleFavourites } from '../../reducers/favourites/actions';

const getFavourites = (favourites, cards) =>
  favourites.map(single => cards.find(card => card.id === single));

const mapStateToProps = state => ({
  favourites: getFavourites(state.favourites, state.cards.pokemon),
});

const mapDispatchToProps = dispatch => ({
  toggleFavourites: data => dispatch(toggleFavourites(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
