import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCards } from './actions';

import Header from './containers/Header';
import Home from './routes/home';
import Favourites from './routes/favourites';
import Details from './routes/details';

class App extends PureComponent {
  static propTypes = {
    fetchAllCards: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchAllCards();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/details/:id" component={Details} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  fetchAllCards: () => dispatch(fetchCards()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
