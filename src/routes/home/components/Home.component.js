import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class extends PureComponent {
  static displayName = 'Home'

  static propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
    sort: PropTypes.string.isRequired,
    renderFavouritesBtn: PropTypes.func.isRequired,
  }

  state = {}

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
    const { cards } = this.props;

    if (!cards || !cards.length) return null;

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