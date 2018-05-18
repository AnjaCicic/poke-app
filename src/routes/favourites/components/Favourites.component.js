import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaMehO, FaTimesCircle } from 'react-icons/lib/fa';

const renderFavourites = (favourites, toggleFavourites) =>
  favourites.map((card, index) => (
    <div className="card" key={index}>
      <NavLink to={`/details/${card.id}`}>
        <img className="cardImg" src={card.imageUrl} alt={card.name} />
      </NavLink>
      <FaTimesCircle className="close" onClick={() => toggleFavourites(card.id)} />
    </div>
  ));

const Favourites = ({ favourites, toggleFavourites }) => {
  if (!favourites || !favourites.length) {
    return (
      <div className="favWrapEmpty">
        <h3><FaMehO /> No favourites</h3>
        <span>Go back to home page and add some cards to favourites</span>
      </div>
    );
  }

  return (
    <div className="favWrap">
      {renderFavourites(favourites, toggleFavourites)}
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
  toggleFavourites: PropTypes.func,
};

export default Favourites;
