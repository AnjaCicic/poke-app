import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { FaCaretDown } from 'react-icons/lib/fa';
import { changeSort } from '../actions';

const { Item } = Menu;

const renderMenu = chgSort => (
  <Menu onClick={e => chgSort(e.key)}>
    <Item key="id"> ID </Item>
    <Item key="hpAscending"> HP ascending </Item>
    <Item key="hpDescending"> HP descending </Item>
  </Menu>
);


const Header = ({ chgSort }) => (
  <div className="navWrap">
    <img src="/images/pokemon-logo.png" alt="Pokemon" className="logo" />
    <ul className="nav">
      <li className="navLink"><NavLink exact to={'/'}> HOME </NavLink></li>
      <li className="navLink"><NavLink to={'/favourites'}> FAVOURITES </NavLink></li>
      <li className="navLink">
        <Dropdown trigger={['click']} overlay={renderMenu(chgSort)}><span>SORT BY <FaCaretDown /></span></Dropdown>
      </li>
    </ul>
  </div>
);

Header.propTypes = {
  chgSort: PropTypes.func.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  chgSort: data => dispatch(changeSort(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
