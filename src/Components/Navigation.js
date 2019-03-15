import React, { Fragment } from 'react';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';

import '../index.css';

const logo = <img style={{height: '4rem'}} src={window.location.origin + '/images/navbar-logo.png'} />

const Navigation = () => (
  // <Fragment>
  //   <Navbar style={style} logo={logo} right className="Main-theme">
  //     <a style={{width: "100%", marginTop: '1rem'}} href="tel:+1-978-967-9535" className="show-on-medium-and-up orange darken-3 hoverable btn">Call (978)232-3322</a>
  //   </Navbar>
  //   <Button style={{width: "100%"}} className="hide-on-med-and-up orange darken-3 hoverable">Call (978)232-3322</Button>
  // </Fragment>
  <Fragment>
    <nav style={style} className="Main-theme">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">{logo}</a>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li><a href="#">Menu</a></li>
          <li className="right" style={{marginTop: '1rem'}}><a href="tel:+1-978-967-9535" className="show-on-medium-and-up orange darken-3 hoverable btn">Call (978)232-3322</a></li>
        </ul>
      </div>
    </nav>
    <Button style={{width: "100%", marginTop: "0.5rem"}} className="hide-on-med-and-up orange darken-3 hoverable">Call (978)232-3322</Button>
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
