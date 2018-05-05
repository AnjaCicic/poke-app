import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd';

import FavouritesBtn from '../../../containers/FavouritesBtn';

const renderCards = cards => cards.map((card, index) => (
  <div className="card" key={index}>
    <NavLink to={`/details/${card.id}`}>
      <img className="cardImg" src={card.imageUrl} alt={card.name} />
    </NavLink>
    <FavouritesBtn card={card} />
  </div>
));

const Home = ({ page, cards, count, changePage }) => {
  if (!cards || !cards.length) {
    return (<div className="loadingIcon" />);
  }

  return (<div className="cardsWrap">
    {renderCards(cards)}
    <Pagination
      current={page}
      total={count}
      pageSize={12}
      onChange={() => changePage(page)}
    />
  </div>);
};

Home.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ),
  page: PropTypes.number,
  count: PropTypes.number,
  changePage: PropTypes.func,
};

export default Home;
