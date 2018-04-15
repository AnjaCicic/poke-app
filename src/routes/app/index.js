import { connect } from 'react-redux';

import App from './components/App.component';
import { fetchCards } from '../../actions';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
