import { connect } from 'react-redux';
import Details from './Details.component';
import { toggleFavourites, fetchDetails } from '../../actions';

const isCardFavourite = (card, favourites) => {
  if (!card || !Object.keys(card).length || !favourites || !favourites.length) return false;

  return favourites.findIndex(fav => fav === card.id) !== -1;
};

const mapStateToProps = state => ({
  card: {
    ...state.details,
    isFavourite: isCardFavourite(state.details, state.favourites),
  },
});

const mapDispatchToProps = dispatch => ({
  fetchDetails: data => dispatch(fetchDetails(data)),
  toggleFavourites: data => dispatch(toggleFavourites(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
