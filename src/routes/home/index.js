import React, { PureComponent } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import CONFIG from '../../config';

export default class extends PureComponent {
  static displayName = 'Home'

  state = {
    cards: [],
  }

  componentWillMount() {
    axios.get(`${CONFIG.apiUrl}/cards?page=1&pageSize=10`)
      .then((res) => {
        if (res.data.cards && res.data.cards.length) {
          this.setState({ cards: res.data.cards });
        }
      });
  }

  renderCards = () => {
    const { cards } = this.state;

    return cards.map(card => (<div className="card">
      <NavLink to={`/details/${card.id}`}>
        <img className="cardImg" src={card.imageUrl} alt={card.name} />
      </NavLink>
    </div>));
  }

  render() {
    return (<div className="cardsWrap">
      {this.renderCards()}
    </div>);
  }
}
