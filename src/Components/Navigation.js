import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

import '../index.css';

const Navigation = () => (
  <Navbar style={style} className="Main-theme" brand='logo' right>
    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
  </Navbar>
);

const style = {
  marginBottom: 10
}
export default Navigation;
