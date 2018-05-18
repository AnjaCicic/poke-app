import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import FavouritesBtn from '../../components/FavouritesBtn';

export default class extends PureComponent {
  static displayName = 'Details'

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
    card: PropTypes.shape(),
    loading: PropTypes.bool,
    fetchDetails: PropTypes.func.isRequired,
    toggleFavourites: PropTypes.func.isRequired,
  }

  state = {}

  componentDidMount() {
    const { match } = this.props;

    this.props.fetchDetails(match.params.id);
  }

  renderAttacks = () => {
    const { card: { attacks } } = this.props;

    if (!attacks || !attacks.length) return null;

    return attacks.map((attack, index) => (<div key={index} className="attack">
      <span className="attackName">{attack.name} | {attack.damage}</span>
      {(attack.cost && attack.cost.length) ? (<span className="attackIcons">
        {attack.cost.map((single, ind) => <i key={ind} className={`energy ${single.toLowerCase()}`} />)}
      </span>) : null}
      <br />
      {attack.text ? <small className="attackDesc">{attack.text}</small> : null}
    </div>));
  }

  render() {
    const { card, loading } = this.props;

    if (loading) {
      return (<Row className="details">
        <Col xs={24} sm={8}>
          <img
            className="detailsImg"
            src={'/images/card-back.png'}
            alt={'Card back'}
          />
        </Col>
        <Col xs={24} sm={16} />
      </Row>);
    }

    return (<Row className="details">
      <Col xs={24} sm={8}>
        <img
          className="detailsImg"
          src={card.imageUrl}
          alt={card.name}
        />
        <FavouritesBtn cardId={card.id} isFavourite={card.isFavourite} toggleFavs={this.props.toggleFavourites} />
      </Col>
      <Col xs={24} sm={16}>
        <div className="detailsContent">
          <h3>{card.name}</h3>
          <h4>{card.supertype} - {card.subtype}  <span className="hp"> HP {card.hp} </span></h4>
          <hr />
          {this.renderAttacks()}
          <br />
          <Row>
            {(card.weaknesses && card.weaknesses.length) ? (
              <Col xs={8}>
                <span> WEAKNESS </span><br />
                {card.weaknesses.map((single, index) =>
                  (<span key={index}>
                    <i className={`energy ${single.type.toLowerCase()}`} /> {single.value}
                  </span>))}
              </Col>
            ) : null}
            {(card.resistances && card.resistances.length) ? (
              <Col xs={8}>
                <span> RESISTANCE </span><br />
                {card.resistances.map((single, index) =>
                  (<span key={index}>
                    <i className={`energy ${single.type.toLowerCase()}`} /> {single.value}
                  </span>),
                )}
              </Col>
            ) : null}
            {(card.retreatCost && card.retreatCost.length) ? (
              <Col xs={8}>
                <span> RETREAT COST </span><br />
                {card.retreatCost.map((single, index) =>
                  (<i key={index} className={`energy ${single.toLowerCase()}`} />),
                )}
              </Col>
            ) : null}
          </Row>
          <br />
          <Row>
            <Col xs={8}>
              ARTIST <br />
              <small>{(card.artist) ? card.artist : 'Unknown'}</small>
            </Col>
            <Col xs={8}>
              RARITY <br />
              <small>{(card.rarity) ? card.rarity : 'Unknown'}</small>
            </Col>
            <Col xs={8}>
              SET <br />
              <small>{(card.set) ? card.set : 'Unknown'}</small>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>);
  }
}
