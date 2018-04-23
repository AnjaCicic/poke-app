import { connect } from 'react-redux';
import Home from './components/Home.component';
import { addToFavourites, removeFromFavourites } from '../../actions';

const mapStateToProps = state => ({
  cards: state.cards,
  sort: state.sort,
});

const mapDispatchToProps = dispatch => ({
  addToFavourites: data => dispatch(addToFavourites(data)),
  removeFromFavourites: data => dispatch(removeFromFavourites(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
