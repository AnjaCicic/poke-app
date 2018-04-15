import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaMehO, FaTimesCircle } from 'react-icons/lib/fa';

export default class extends PureComponent {
  static displayName = 'Favourites'

  static propTypes = {
    favourites: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
    removeFromFavourites: PropTypes.func,
  }

  state = {}

  renderFavourites = () => {
    const { favourites } = this.props;

    return favourites.map((card, index) => (<div className="card" key={index}>
      <NavLink to={`/details/${card.id}`}>
        <img className="cardImg" src={card.imageUrl} alt={card.name} />
      </NavLink>
      <FaTimesCircle className="close" onClick={() => this.props.removeFromFavourites(index)} />
    </div>));
  }

  render() {
    const { favourites } = this.props;

    if (!favourites || !favourites.length) {
      return (<div className="favWrap">
        <h3><FaMehO /> No favourites</h3>
        <span>Go back to home page and add some cards to favourites</span>
      </div>);
    }

    return (<div className="favWrap">
      {this.renderFavourites()}
    </div>);
  }
}
