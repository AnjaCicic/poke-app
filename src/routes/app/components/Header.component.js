import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { FaCaretDown } from 'react-icons/lib/fa';

const { Item } = Menu;

export default class Header extends PureComponent {
  static displayName = 'Header'

  static propTypes = {
    changeSort: PropTypes.func.isRequired,
  }

  state = {}

  renderMenu = () => (<Menu onClick={e => this.props.changeSort(e.key)}>
    <Item key="id"> ID </Item>
    <Item key="hpAscending"> HP ascending </Item>
    <Item key="hpDescending"> HP descending </Item>
  </Menu>);

  render() {
    return (<div className="navWrap">
      <img src="/images/pokemon-logo.png" alt="Pokemon" className="logo" />
      <ul className="nav">
        <li className="navLink"><NavLink exact to={'/'}> HOME </NavLink></li>
        <li className="navLink"><NavLink to={'/favourites'}> FAVOURITES </NavLink></li>
        <li className="navLink">
          <Dropdown trigger={['click']} overlay={this.renderMenu()}><span>SORT BY <FaCaretDown /></span></Dropdown>
        </li>
      </ul>
    </div>);
  }
}
