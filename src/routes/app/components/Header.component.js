import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends PureComponent {
  static displayName = 'Header'

  state = {}

  render() {
    return (<div className="navWrap">
      <img src="/images/pokemon-logo.png" alt="Pokemon" className="logo" />
      <ul className="nav">
        <li className="navLink"><NavLink exact to={'/'}> HOME </NavLink></li>
        <li className="navLink"><NavLink to={'/favourites'}> FAVOURITES </NavLink></li>
      </ul>
    </div>);
  }
}
