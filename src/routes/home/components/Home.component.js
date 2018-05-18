import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd';

import FavouritesBtn from '../../../components/FavouritesBtn';

export default class extends PureComponent {
  static displayName = 'Home'

  static propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        imageUrl: PropTypes.string,
      }),
    ),
    loading: PropTypes.bool,
    page: PropTypes.number,
    count: PropTypes.number,
    changePage: PropTypes.func,
    fetchCards: PropTypes.func,
    toggleFavourites: PropTypes.func,
  }

  state = {}

  componentDidMount() {
    this.props.fetchCards();
  }

  renderCards = () =>
    this.props.cards.map((card, index) => (
      <div className="card" key={index}>
        <NavLink to={`/details/${card.id}`}>
          <img className="cardImg" src={card.imageUrl} alt={card.name} />
        </NavLink>
        <FavouritesBtn cardId={card.id} isFavourite={card.isFavourite} toggleFavs={this.props.toggleFavourites} />
      </div>
    ));

  render() {
    const { page, cards, count, loading } = this.props;

    if (loading) {
      return (<div className="loadingIcon" />);
    }

    return (<div className="cardsWrap">
      {this.renderCards(cards)}
      <Pagination
        current={page}
        total={count}
        pageSize={12}
        onChange={this.props.changePage}
      />
    </div>);
  }
}
