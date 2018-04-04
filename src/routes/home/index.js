import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import CONFIG from '../../config';

export default class extends PureComponent {
  static displayName = 'Home'

  static propTypes = {
    sort: PropTypes.string.isRequired,
    renderFavouritesBtn: PropTypes.func.isRequired,
  }

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

  componentWillReceiveProps(nextProps) {
    const { sort: newSort } = nextProps;
    const { sort } = this.props;
    const { cards } = this.state;
    let newCards = [];

    if (newSort && newSort !== sort) {
      switch (newSort) {
        case 'id':
          newCards = cards.sort((a, b) => a.id > b.id);
          break;
        case 'hpAscending':
          newCards = cards.sort((a, b) => {
            if (a.hp === 'None') return 1;
            if (b.hp === 'None') return -1;

            return parseInt(a.hp, 10) > parseInt(b.hp, 10);
          });
          break;
        case 'hpDescending':
          newCards = cards.sort((a, b) => {
            if (a.hp === 'None') return 1;
            if (b.hp === 'None') return -1;

            return parseInt(a.hp, 10) < parseInt(b.hp, 10);
          });
          break;
        default:
          newCards = cards;
          break;
      }

      this.setState({ cards: newCards });
    }
  }

  renderCards = () => {
    const { cards } = this.state;

    return cards.map((card, index) => (<div className="card" key={index}>
      <NavLink to={`/details/${card.id}`}>
        <img className="cardImg" src={card.imageUrl} alt={card.name} />
      </NavLink>
      {this.props.renderFavouritesBtn(card)}
    </div>));
  }

  render() {
    return (<div className="cardsWrap">
      {this.renderCards()}
    </div>);
  }
}
