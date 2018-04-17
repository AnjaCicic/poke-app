import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { FaStar, FaStarO } from 'react-icons/lib/fa';
import { addToFavourites, removeFromFavourites } from '../actions';

const FavouritesBtn = ({ card, favourites, addToFavs, removeFromFavs }) => {
  const index = favourites.findIndex(i => i.id === card.id);

  if (index === -1) {
    return (<Button className="favsBtn" onClick={() => addToFavs(card)}>
      <FaStar /> Add to favourites
    </Button>);
  }

  return (<Button className="favsBtn" onClick={() => removeFromFavs(card.id)}>
    <FaStarO /> Remove from favourites
  </Button>);
};

FavouritesBtn.propTypes = {
  card: PropTypes.shape().isRequired,
  favourites: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
  addToFavs: PropTypes.func.isRequired,
  removeFromFavs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  favourites: state.favourites,
});

const mapDispatchToProps = dispatch => ({
  addToFavs: data => dispatch(addToFavourites(data)),
  removeFromFavs: data => dispatch(removeFromFavourites(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavouritesBtn);
