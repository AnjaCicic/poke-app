import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header.component';
import Home from '../../home';
import Favourites from '../../favourites';
import Details from '../../details';

export default class extends PureComponent {
  static displayName = 'App'

  static propTypes = {
    fetchCards: PropTypes.func.isRequired,
    changeSort: PropTypes.func.isRequired,
  }

  state = {}

  componentWillMount() {
    this.props.fetchCards();
  }

  render() {
    return (<BrowserRouter>
      <div>
        <Header changeSort={this.props.changeSort} />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/details/:id" component={Details} />
        </div>
      </div>
    </BrowserRouter>);
  }
}
