import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaMehO, FaTimesCircle } from 'react-icons/lib/fa';

const renderFavourites = (favourites, removeFromFavourites) =>
  favourites.map((card, index) => (
    <div className="card" key={index}>
      <NavLink to={`/details/${card.id}`}>
        <img className="cardImg" src={card.imageUrl} alt={card.name} />
      </NavLink>
      <FaTimesCircle className="close" onClick={() => removeFromFavourites(card.id)} />
    </div>
  ));

const Favourites = ({ favourites, removeFromFavourites }) => {
  if (!favourites || !favourites.length) {
    return (
      <div className="favWrap">
        <h3><FaMehO /> No favourites</h3>
        <span>Go back to home page and add some cards to favourites</span>
      </div>
    );
  }

  return (
    <div className="favWrap">
      {renderFavourites(favourites, removeFromFavourites)}
    </div>
  );
};

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ),
  removeFromFavourites: PropTypes.func,
};

export default Favourites;
