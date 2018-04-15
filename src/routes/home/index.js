import { connect } from 'react-redux';

import Home from './components/Home.component';

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
