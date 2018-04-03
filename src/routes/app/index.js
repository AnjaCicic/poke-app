import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'antd';
import { FaStar, FaStarO } from 'react-icons/lib/fa';

import Header from './components/Header.component';
import Home from '../home';
import Favourites from '../favourites';
import Details from '../details';

export default class extends PureComponent {
  static displayName = 'App'

  state = {
    favourites: [],
  }

  addToFavourites = card => this.setState({ favourites: [...this.state.favourites, card] })

  removeFromFavourites = index =>
    this.setState({
      favourites: [
        ...this.state.favourites.slice(0, index),
        ...this.state.favourites.slice(index + 1),
      ],
    });

  renderFavouritesBtn = (card) => {
    const { favourites } = this.state;
    const index = favourites.findIndex(i => i.id === card.id);

    if (index === -1) {
      return (<Button className="favsBtn" onClick={() => this.addToFavourites(card)}>
        <FaStar /> Add to favourites
      </Button>);
    }

    return (<Button className="favsBtn" onClick={() => this.removeFromFavourites(index)}>
      <FaStarO /> Remove from favourites
    </Button>);
  }

  render() {
    const { favourites } = this.state;

    return (<BrowserRouter>
      <div>
        <Header />
        <div className="content">
          <Route
            exact
            path="/"
            render={props => <Home
              renderFavouritesBtn={this.renderFavouritesBtn}
              {...props}
            />}
          />
          <Route
            path="/favourites"
            render={props => <Favourites
              favourites={favourites}
              removeFromFavourites={this.removeFromFavourites}
              {...props}
            />}
          />
          <Route
            path="/details/:id"
            render={props => <Details
              renderFavouritesBtn={this.renderFavouritesBtn}
              {...props}
            />}
          />
        </div>
      </div>
    </BrowserRouter>);
  }
}
