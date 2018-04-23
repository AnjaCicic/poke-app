import { connect } from 'react-redux';
import Home from './components/Home.component';
import { changePage } from '../../actions';

const mapStateToProps = state => ({
  cards: state.cards,
  sort: state.settings.sort,
  page: state.settings.page,
});

const mapDispatchToProps = dispatch => ({
  changePage: data => dispatch(changePage(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
