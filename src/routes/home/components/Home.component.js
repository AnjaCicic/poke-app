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
    sort: PropTypes.string,
  }

  state = {
    cards: [],
  }

  componentWillMount() {
    const { cards } = this.props;

    if (cards && cards.length) {
      this.setState({ cards });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { sort: newSort, cards: newCards } = nextProps;
    const { sort } = this.props;
    const { cards } = this.state;

    if (!cards || !cards.length || sort !== newSort) {
      switch (newSort) {
        case 'id':
          this.setState({ cards: newCards.sort((a, b) => a.id > b.id) });
          break;
        case 'hpAscending':
          this.setState({
            cards: newCards.sort((a, b) => {
              if (a.hp === 'None') return 1;
              if (b.hp === 'None') return -1;

              return parseInt(a.hp, 10) > parseInt(b.hp, 10);
            }),
          });
          break;
        case 'hpDescending':
          this.setState({
            cards: newCards.sort((a, b) => {
              if (a.hp === 'None') return 1;
              if (b.hp === 'None') return -1;

              return parseInt(a.hp, 10) < parseInt(b.hp, 10);
            }),
          });
          break;
        default:
          this.setState({ cards: newCards });
          break;
      }
    }
  }

  renderCards = () => {
    const { cards } = this.state;

    if (!cards || !cards.length) return null;

    return cards.map((card, index) => (<div className="card" key={index}>
      <NavLink to={`/details/${card.id}`}>
        <img className="cardImg" src={card.imageUrl} alt={card.name} />
      </NavLink>
      <FavouritesBtn card={card} />
    </div>));
  }

  render() {
    return (<div className="cardsWrap">
      {this.renderCards()}
    </div>);
  }
}
