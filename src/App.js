import React, { Component } from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Menu from './Containers/Menu';
import Admin from './Containers/Admin';
import Home from './Containers/Home';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
          // render={ props => <Menu {...props} /> }
        />
        <Route
          path="/menu"
          component={Menu}
          // render={ props => <Menu {...props} /> }
        />
        <Route
          path="/admin"
          component={Admin}
        />
      </Switch>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     categories: null
//   }
// }
export default connect(null, null)(App);
