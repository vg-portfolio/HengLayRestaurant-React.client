import React, { Fragment } from 'react';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import logo from '../images/navbar-logo.png';

import '../index.css';

const navbarLogo = <img style={{height: '4rem'}} src={logo} />

const Navigation = () => (
  <Fragment>
    <div className="navbar-fixed">
      <nav style={style} className="Main-theme">
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo left">{navbarLogo}</NavLink>
          <ul className="right hide-on-med-and-up">
            <li><NavLink to="/menu">Menu</NavLink></li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-small-only">
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li className="right"><a href="tel:9784584619" className="orange darken-3 hoverable btn">Call (978)232-3322</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <Button href="tel:9784584619" style={{width: "100%", marginTop: "1rem", position: 'fixed', zIndex: '999'}} className="hide-on-med-and-up orange darken-3 hoverable">Call (978)232-3322</Button>
  </Fragment>
);

const style = {
  height: '5rem',
  // marginBottom: '2rem',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 5,
  paddingBottom: 5
}
export default Navigation;
