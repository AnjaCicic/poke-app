import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd';

import FavouritesBtn from '../../../containers/FavouritesBtn';

export default class extends PureComponent {
  static displayName = 'Home'

  static propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
    sort: PropTypes.string,
    page: PropTypes.number,
    changePage: PropTypes.func,
  }

  state = {
    cards: [],
  }

  componentWillMount() {
    const { cards, page } = this.props;

    if (cards && cards.length) {
      this.setState({ cards: cards.slice((page - 1) * 12, page * 12) });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { sort: newSort, cards: newCards, page } = nextProps;
    const { sort } = this.props;
    const { cards } = this.state;

    if (!cards || !cards.length || sort !== newSort) {
      switch (newSort) {
        case 'id':
          this.setState({
            cards: newCards.sort((a, b) => a.id > b.id).slice((page - 1) * 12, page * 12),
          });
          break;
        case 'hpAscending':
          this.setState({
            cards: newCards
              .sort((a, b) => {
                if (!a.hp || a.hp.toLowerCase() === 'none') return 1;
                if (!b.hp || b.hp.toLowerCase() === 'none') return -1;

                return parseInt(a.hp, 10) - parseInt(b.hp, 10);
              })
              .slice((page - 1) * 12, page * 12),
          });
          break;
        case 'hpDescending':
          this.setState({
            cards: newCards
              .sort((a, b) => {
                if (!a.hp || a.hp.toLowerCase() === 'none') return 1;
                if (!b.hp || b.hp.toLowerCase() === 'none') return -1;

                return parseInt(b.hp, 10) - parseInt(a.hp, 10);
              })
              .slice((page - 1) * 12, page * 12),
          });
          break;
        default:
          this.setState({ cards: newCards.slice((page - 1) * 12, page * 12) });
          break;
      }
    }
  }

  handlePageChange = (page) => {
    const { cards } = this.props;

    this.props.changePage(page);

    this.setState({ cards: cards.slice((page - 1) * 12, page * 12) });
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
    const { page, cards } = this.props;

    return (<div className="cardsWrap">
      {this.renderCards()}
      <Pagination
        current={page}
        total={cards.length}
        pageSize={12}
        onChange={this.handlePageChange}
      />
    </div>);
  }
}
