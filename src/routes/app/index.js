import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Header from './components/Header.component';
import Home from '../home';
import Favourites from '../favourites';
import Details from '../details';

export default class extends PureComponent {
  static displayName = 'App'

  state = {}

  render() {
    return (<BrowserRouter>
      <div>
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/details/:id" component={Details} />
        </div>
      </div>
    </BrowserRouter>);
  }
}