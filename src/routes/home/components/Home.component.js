import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import FavouritesBtn from '../../../containers/FavouritesBtn';

export default class extends PureComponent {
  static displayName = 'Home'

  static propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
  }

  state = {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  renderCards = () => {
    const { cards } = this.props;

    if (!cards || !cards.length) return null;

    return cards.map((card, index) => (<div className="card" key={index}>
      <NavLink to={`/details/${card.id}`}>
        <img className="cardImg" src={card.imageUrl} alt={card.name} />
      </NavLink>
      <FavouritesBtn card={card} />
    </div>));
  }

  render() {
    console.log('sort change');
    return (<div className="cardsWrap">
      {this.renderCards()}
    </div>);
  }
}
