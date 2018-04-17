import { connect } from 'react-redux';
import Favourites from './components/Favourites.component';
import { removeFromFavourites } from '../../actions';

const mapStateToProps = state => ({
  favourites: state.favourites,
});

const mapDispatchToProps = dispatch => ({
  removeFromFavourites: data => dispatch(removeFromFavourites(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
