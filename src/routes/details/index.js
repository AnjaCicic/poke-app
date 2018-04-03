import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Row, Col } from 'antd';

import CONFIG from '../../config';

export default class extends PureComponent {
  static displayName = 'Details'

  static propTypes = {
    match: PropTypes.shape().isRequired,
    renderFavouritesBtn: PropTypes.func.isRequired,
  }

  state = {
    card: {},
  }

  componentWillMount() {
    const { match } = this.props;

    axios.get(`${CONFIG.apiUrl}/cards/${match.params.id}`)
      .then((res) => {
        if (res.data.card) {
          this.setState({ card: res.data.card });
        }
      });
  }

  renderAttacks = () => {
    const { card: { attacks } } = this.state;

    return attacks.map((attack, index) => (<div key={index} className="attack">
      {attack.cost.map(single => <i className={`energy ${single.toLowerCase()}`} />)}
      &nbsp; {attack.name} | {attack.damage}<br />
      {attack.text ? <small>{attack.text}</small> : null}
    </div>));
  }

  render() {
    const { card } = this.state;

    if (!card || !card.id) {
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
        {this.props.renderFavouritesBtn(card)}
      </Col>
      <Col xs={24} sm={16}>
        <div className="detailsContent">
          <h3>{card.name}</h3>
          <h4>{card.supertype} - {card.subtype}</h4>
          <h4 className="hp">HP {card.hp}</h4>
          <hr />
          {this.renderAttacks()}
          <br />
          <Row>
            <Col xs={8}>
              <span>WEAKNESS</span><br />
              {card.weaknesses.map((single, index) => (<span key={index}>
                <i className={`energy ${single.type.toLowerCase()}`} /> {single.value}
              </span>))}
            </Col>
            <Col xs={8}>
              <span>RESISTANCE</span><br />
              {card.resistances.map((single, index) => (<span key={index}>
                <i className={`energy ${single.type.toLowerCase()}`} /> {single.value}
              </span>))}
            </Col>
            <Col xs={8}>
              <span>RETREAT COST</span><br />
              {card.retreatCost.map((single, index) => (<i key={index} className={`energy ${single.toLowerCase()}`} />))}
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={8}>
              ARTIST <br />
              <small>{card.artist}</small>
            </Col>
            <Col xs={8}>
              RARITY <br />
              <small>{card.rarity}</small>
            </Col>
            <Col xs={8}>
              SET <br />
              <small>{card.set}</small>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>);
  }
}
