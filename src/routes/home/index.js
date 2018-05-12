import { connect } from 'react-redux';
import Home from './components/Home.component';
import { fetchCards, changePage, toggleFavourites } from '../../actions';

const getCards = (cards, favourites, sort, page) => {
  const newCards = cards.map(card => ({
    ...card,
    isFavourite: favourites.findIndex(fav => fav === card.id) !== -1,
  }));

  switch (sort) {
    case 'id':
      return newCards.sort((a, b) => a.id > b.id).slice((page - 1) * 12, page * 12);
    case 'hpAscending':
      return newCards.sort((a, b) => {
        if (!a.hp || a.hp.toLowerCase() === 'none') return 1;
        if (!b.hp || b.hp.toLowerCase() === 'none') return -1;

        return parseInt(a.hp, 10) - parseInt(b.hp, 10);
      })
        .slice((page - 1) * 12, page * 12);
    case 'hpDescending':
      return newCards.sort((a, b) => {
        if (!a.hp || a.hp.toLowerCase() === 'none') return 1;
        if (!b.hp || b.hp.toLowerCase() === 'none') return -1;

        return parseInt(b.hp, 10) - parseInt(a.hp, 10);
      })
        .slice((page - 1) * 12, page * 12);
    default:
      return newCards.slice((page - 1) * 12, page * 12);
  }
};

const mapStateToProps = state => ({
  cards: getCards(state.cards, state.favourites, state.settings.sort, state.settings.page),
  page: state.settings.page,
  count: state.cards.length,
});

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards()),
  changePage: data => dispatch(changePage(data)),
  toggleFavourites: data => dispatch(toggleFavourites(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
