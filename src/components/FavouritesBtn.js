import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { FaStar, FaStarO } from 'react-icons/lib/fa';

const FavouritesBtn = ({ cardId, isFavourite, toggleFavs }) => {
  if (isFavourite) {
    return (<Button className="favsBtn" onClick={() => toggleFavs(cardId)}>
      <FaStarO /> Remove from favourites
    </Button>);
  }

  return (<Button className="favsBtn" onClick={() => toggleFavs(cardId)}>
    <FaStar /> Add to favourites
</Button>);
};

FavouritesBtn.propTypes = {
  cardId: PropTypes.string.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  toggleFavs: PropTypes.func.isRequired,
};

export default FavouritesBtn;
