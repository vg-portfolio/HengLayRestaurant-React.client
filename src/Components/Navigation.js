import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

import '../index.css';
const Logo = <img src="../images/navbar-logo.png" />;
const Navigation = () => (
  <Navbar style={style} brand="Heng Lay" right className="Main-theme">
    <NavItem><Icon>search</Icon></NavItem>
  </Navbar>
);

const style = {
  marginBottom: 10,
  paddingLeft: 50
}
export default Navigation;
