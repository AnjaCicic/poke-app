import { connect } from 'react-redux';

import App from './components/App.component';
import { fetchCards, changeSort } from '../../actions';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards()),
  changeSort: data => dispatch(changeSort(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
