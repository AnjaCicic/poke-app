import { connect } from 'react-redux';
import Details from './Details.component';
import { toggleFavourites } from '../../reducers/favourites/actions';
import { fetchDetails } from '../../reducers/details/actions';

const isCardFavourite = (card, favourites) => {
  if (!card || !Object.keys(card).length || !favourites || !favourites.length) return false;

  return favourites.findIndex(fav => fav === card.id) !== -1;
};

const mapStateToProps = state => ({
  card: {
    ...state.details.card,
    isFavourite: isCardFavourite(state.details.card, state.favourites),
  },
  loading: state.details.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchDetails: data => dispatch(fetchDetails(data)),
  toggleFavourites: data => dispatch(toggleFavourites(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
