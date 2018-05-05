import { connect } from 'react-redux';
import Home from './components/Home.component';
import { fetchCards, changePage } from '../../actions';

const getCards = (cards, sort, page) => {
  switch (sort) {
    case 'id':
      return cards.sort((a, b) => a.id > b.id).slice((page - 1) * 12, page * 12);
    case 'hpAscending':
      return cards.sort((a, b) => {
        if (!a.hp || a.hp.toLowerCase() === 'none') return 1;
        if (!b.hp || b.hp.toLowerCase() === 'none') return -1;

        return parseInt(a.hp, 10) - parseInt(b.hp, 10);
      })
        .slice((page - 1) * 12, page * 12);
    case 'hpDescending':
      return cards.sort((a, b) => {
        if (!a.hp || a.hp.toLowerCase() === 'none') return 1;
        if (!b.hp || b.hp.toLowerCase() === 'none') return -1;

        return parseInt(b.hp, 10) - parseInt(a.hp, 10);
      })
        .slice((page - 1) * 12, page * 12);
    default:
      return cards.slice((page - 1) * 12, page * 12);
  }
};

const mapStateToProps = state => ({
  cards: getCards(state.cards, state.settings.sort, state.settings.page),
  page: state.settings.page,
  count: state.cards.length,
});

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards()),
  changePage: data => dispatch(changePage(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
